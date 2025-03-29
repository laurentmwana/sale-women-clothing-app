<?php

namespace App\Queries;

use App\Models\Stock;
use Illuminate\Http\Request;
use App\Searchable\SearchData;
use Illuminate\Support\Collection;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

class StockQuery
{
    public static function findAll(): Collection
    {
        return Stock::with(['product'])
            ->orderByDesc('updated_at')
            ->get();
    }

    public static function findAllWithFilters(Request $request): LengthAwarePaginator
    {
        $builder =  Stock::with(['product'])
            ->orderByDesc('updated_at');

        $columnSearch = ['stock_value', 'product_id'];

        $serachValue = $request->query('q');

        if ($serachValue !== null && !empty($serachValue)) {
            $builder = SearchData::handle($builder, $serachValue, $columnSearch);
        }

        return $builder->paginate();
    }

    public static function findAllWithRelation(): Collection
    {
        return Stock::with(['product'])
            ->orderByDesc('updated_at')
            ->get();
    }

    public static function findOne(int $id): Stock
    {
        return Stock::with(['product'])
            ->findOrFail($id);
    }
}
