<?php

namespace App\Queries;

use App\Models\Like;
use Illuminate\Http\Request;
use App\Searchable\SearchData;
use Illuminate\Support\Collection;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

class PaymentQuery
{
    public static function findAll(): Collection
    {
        return Like::with(['product', 'user'])
            ->orderByDesc('updated_at')
            ->get();
    }

    public static function findAllWithFilters(Request $request): LengthAwarePaginator
    {
        $builder =  Like::with(['product', 'user'])
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
        return Like::with(['product', 'user'])
            ->orderByDesc('updated_at')
            ->get();
    }

    public static function findOne(int $id): Like
    {
        return Like::with(['product', 'user'])
            ->findOrFail($id);
    }

    public static function findLikeForUser(int $userId, int $productId): ?Like
    {
        return Like::where('user_id', '=', $userId)
            ->where('product_id', '=', $productId)
            ->first();
    }
}
