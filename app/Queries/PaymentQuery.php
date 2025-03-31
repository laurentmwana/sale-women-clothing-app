<?php

namespace App\Queries;

use App\Models\Payment;
use Illuminate\Http\Request;
use App\Searchable\SearchData;
use Illuminate\Support\Collection;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

class PaymentQuery
{
    public static function findAll(): Collection
    {
        return Payment::with(['card', 'client'])
            ->orderByDesc('updated_at')
            ->get();
    }

    public static function findAllWithFilters(Request $request): LengthAwarePaginator
    {
        $builder =  Payment::with(['card', 'client'])
            ->orderByDesc('updated_at');

        $columnSearch = ['card_id', 'client_id', 'id',  'amount', 'status'];

        $serachValue = $request->query('q');

        if ($serachValue !== null && !empty($serachValue)) {
            $builder = SearchData::handle($builder, $serachValue, $columnSearch);
        }

        return $builder->paginate();
    }

    public static function findAllWithRelation(): Collection
    {
        return Payment::with(['card', 'client'])
            ->orderByDesc('updated_at')
            ->get();
    }

    public static function findOne(int $id): Payment
    {
        return Payment::with(['card', 'client'])
            ->findOrFail($id);
    }
}
