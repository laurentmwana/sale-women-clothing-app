<?php

namespace App\Actions;

use App\Models\Stock;
use Illuminate\Support\Facades\DB;
use App\Services\Actions\StockActionInterface;

class StockAction implements StockActionInterface
{

    public function createStock(array $data): Stock
    {
        return DB::transaction(fn() => Stock::create($data));
    }

    public function updateStock(array $data, Stock $stock): Stock
    {
        DB::transaction(fn() => $stock->update($data));

        return $stock;
    }

    public function deleteStock(Stock $stock): bool
    {
        return DB::transaction(fn() => $stock->delete());
    }
}
