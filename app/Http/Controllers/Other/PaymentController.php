<?php

namespace App\Http\Controllers\Other;

use Inertia\Inertia;
use App\Queries\CardQuery;
use Illuminate\Mail\Mailer;
use App\Actions\StockAction;
use Illuminate\Http\Request;
use App\Queries\PaymentQuery;
use App\Enums\PaymentStateEnum;

use App\Mail\PaymentSuccessMail;
use Illuminate\Support\Collection;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use App\Exceptions\PaymentSituationException;

class PaymentController extends Controller
{
    public function __construct(private StockAction $stockAction, private Mailer $mailer)
    {
    }
    
    public function index(Request $request)
    {
        $user = $request->user()->load('client');

        $cards = CardQuery::findAllForClientPagination($user->client->id);
        
        return Inertia::render('other/payment/index', [
            'cards' => $cards
        ]);
    }

    public function pay(Request $request, int $id): RedirectResponse
    {
        $user = $request->user();

        $card = CardQuery::findOneAllRelation($id);
        $products = $card->products;
        $total = 0;
        
        foreach ($card->products as $product) {
            $stock = $product->stock;

            $newStockValue = $stock->stock_value - 1;

            if ($newStockValue < 0) {
                throw new PaymentSituationException(
                    "Le stock du produit \"{$product->name}\" est {$newStockValue}");
            }
            
            $this->stockAction->updateStock([
                'stock_value' => $newStockValue
            ], $stock);

            $total += $product->price;
        }

        $card->payment()->update([
            'amount' => $total,
            'status' => PaymentStateEnum::SUCCESS->value
        ]);

        $card->update(['buy' => true]);

        $this->mailer->send(new PaymentSuccessMail($user, $products));

        return redirect()->route('payment.index')
            ->with('success', 'paiement effectué avec succès');
    }
}
