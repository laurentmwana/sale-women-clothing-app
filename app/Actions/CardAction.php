<?php

namespace App\Actions;

use App\Models\Card;
use Illuminate\Support\Facades\DB;
use App\Services\Actions\CardActionInterface;

class CardAction implements CardActionInterface
{

    public function syncCard(Card $card, array $ids): bool
    {
        DB::transaction(fn() => $card->products()->sync($ids));

        return true;
    }

    public function createCard(array $data): Card
    {
        return DB::transaction(function () use ($data) {
            $card = Card::create($data);

            $card->products()->sync($data['products']);

            return $card;
        });
    }

    public function soldCard(Card $card): Card
    {
        DB::transaction(fn() => $card->update(['buy' => true]));

        return $card;
    }

    public function deleteCard(Card $card): bool
    {
        return DB::transaction(fn() => $card->delete());
    }
}
