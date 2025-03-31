<?php

namespace App\Queries;

use App\Models\Card;
use App\Models\Client;
use Illuminate\Http\Request;
use App\Searchable\SearchData;
use Illuminate\Support\Collection;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

class CardQuery
{

    public static function findAll(): Collection
    {
        return Card::with(['client'])
            ->orderByDesc('updated_at')
            ->get();
    }

    public static function findAllWithFilters(Request $request): LengthAwarePaginator
    {
        $builder =  Card::with(['client'])
            ->orderByDesc('updated_at');

        $columnSearch = ['buy', 'client_id'];

        $serachValue = $request->query('q');

        if ($serachValue !== null && !empty($serachValue)) {
            $builder = SearchData::handle($builder, $serachValue, $columnSearch);
        }

        return $builder->paginate();
    }

    public static function findAllWithRelation(): Collection
    {
        return Card::with(['client'])
            ->orderByDesc('updated_at')
            ->get();
    }

    public static function findAllForClientPagination(int $clientId): LengthAwarePaginator
    {
        return Card::with(['client', 'products.stock', 'payment'])
            ->where('client_id', '=', $clientId)
        ->paginate();
    }

    public static function findOneAllRelation(int $id): Card
    {
        return Card::with(['client', 'products.stock'])
            ->findOrFail($id);
    }

    public static function findOne(int $id): Card
    {
        return Card::with(['client'])
            ->findOrFail($id);
    }

    public static function findForClient(int $clientId): ?Card
    {
        return Card::with(['products'])
            ->where('client_id', '=', $clientId)
            ->first();
    }

    public static function findOrCreateWithProducts(int $clientId): Card
    {
        return Card::with('products')->firstOrCreate([
            'client_id' => $clientId,
            'buy' => false,
        ]);
    }

    public static function findForClientAllRelation(int $clientId): ?Card
    {
        return Card::with(['products', 'payment', 'client', 'products.stock'])
            ->where('buy', '=', false)
            ->where('client_id', '=', $clientId)
            ->first();
    }
}
