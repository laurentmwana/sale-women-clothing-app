<?php

namespace App\Http\Controllers;

use App\Actions\CardAction;
use App\Models\Client;
use App\Queries\CardQuery;
use App\Queries\ProductQuery;
use App\Queries\ClientQuery;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use App\Exceptions\ModelNotFoundException;

class CreateCardController extends Controller
{
    public function __construct(private CardAction $cardAction) {}

    public function __invoke(Request $request, int $id): RedirectResponse
    {
        $user = $request->user();

        // Récupération du client associé à l'utilisateur
        $client = ClientQuery::findForUser($user->id);
        if (! $client instanceof Client) {
            throw new ModelNotFoundException(
                "Compte client introuvable pour l'utilisateur #{$user->id}"
            );
        }

        $product = ProductQuery::findOneWithRelation($id);
        $stock = $product->stock;

        if (! $stock || $stock->stock_value <= 0) {
            throw new ModelNotFoundException(
                "Produit non disponible en stock"
            );
        }

        $card = CardQuery::findForClient($client->id);

        if ($card) {

            $existingProductIds = $card->products->pluck('id')->toArray();
            $newProductIds = [
                ...$existingProductIds,
                $product->id
            ];

            $this->cardAction->syncCard($card, array_unique($newProductIds));
        } else {
            $this->cardAction->createCard([
                'client_id' => $client->id,
                'products' => [$product->id]
            ]);
        }

        return redirect()->back()->with('toast', 'Produit ajouté au panier');
    }
}
