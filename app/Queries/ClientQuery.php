<?php

namespace App\Queries;

use App\Models\Client;
use Illuminate\Http\Request;
use App\Searchable\SearchData;
use Illuminate\Support\Collection;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

class ClientQuery
{
    public static function findAll(): Collection
    {
        return Client::with(['user'])
            ->orderByDesc('updated_at')
            ->get();
    }

    public static function findAllWithFilters(Request $request): LengthAwarePaginator
    {
        $builder =  Client::with(['user'])
            ->orderByDesc('updated_at');

        $columnSearch = ['Like_value', 'product_id', 'user_id', 'id'];

        $serachValue = $request->query('q');

        if ($serachValue !== null && !empty($serachValue)) {
            $builder = SearchData::handle($builder, $serachValue, $columnSearch);
        }

        return $builder->paginate();
    }

    public static function findAllWithRelation(): Collection
    {
        return Client::with(['user'])
            ->orderByDesc('updated_at')
            ->get();
    }

    public static function findOne(int $id): Client
    {
        return Client::with(['user'])
            ->findOrFail($id);
    }

    public static function findForUser(int $userId): ?Client
    {
        return Client::where('user_id', '=', $userId)->first();
    }
}
