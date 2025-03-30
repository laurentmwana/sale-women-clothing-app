<?php

namespace App\Services\Actions;

use App\Models\Card;

interface CardActionInterface
{
    public function createCard(array $data): Card;

    public function syncCard(Card $card, array $ids): bool;

    public function soldCard(Card $card): Card;

    public function deleteCard(Card $card): bool;
}
