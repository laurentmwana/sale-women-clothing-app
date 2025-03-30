<?php

namespace App\Http\Controllers;

use App\Actions\CardAction;
use App\Models\Client;
use App\Queries\CardQuery;
use App\Queries\ProductQuery;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use App\Exceptions\ModelNotFoundException;

class CreateCardController extends Controller
{
    public function __construct(private CardAction $cardAction) {}

    public function __invoke(Request $request, int $id): RedirectResponse
    {
        $user = $request->user()->load('client');

        $client = $user->client;

        if (!$client instanceof Client) {
            throw new ModelNotFoundException(
                "Compte client introuvable pour l'utilisateur #{$user->id}"
            );
        }

        $product = ProductQuery::findOneWithRelation($id);

        if (!$product || !$product->stock || $product->stock->stock_value <= 0) {
            throw new ModelNotFoundException("Produit non disponible en stock");
        }

        $card = CardQuery::findOrCreateWithProducts($client->id);

        $existingProductIds = $card->products->pluck('id')->toArray();

        if (!in_array($product->id, $existingProductIds)) {
            $newProductIds = array_unique([...$existingProductIds, $product->id]);
            $this->cardAction->syncCard($card, $newProductIds);
        }

        return redirect()->back()->with('success', 'Produit ajouté au panier');
    }
}
