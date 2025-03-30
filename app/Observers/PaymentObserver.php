<?php

namespace App\Observers;

use App\Models\Card;
use App\Actions\PaymentAction;
use App\Enums\PaymentStateEnum;

class PaymentObserver
{
    public function __construct(private PaymentAction $paymentAction) {}

    /**
     * Handle the Card "created" event.
     */
    public function created(Card $card): void
    {
        $this->paymentAction->createPayment([
            'client_id' => $card->client_id,
            'card_id' => $card->id,
            'status' => PaymentStateEnum::PENDING->value,
        ]);
    }
}
