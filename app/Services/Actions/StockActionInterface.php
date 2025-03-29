<?php

namespace App\Services\Actions;

use App\Models\Stock;

interface StockActionInterface
{
    public function createStock(array $data): Stock;

    public function updateStock(array $data, Stock $stock): Stock;

    public function deleteStock(Stock $stock): bool;
}
