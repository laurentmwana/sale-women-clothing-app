<?php

namespace App\Queries;

use App\Models\Category;
use Illuminate\Http\Request;
use App\Searchable\SearchData;
use Illuminate\Support\Collection;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

class CategoryQuery
{
    public static function findAll(): Collection
    {
        return Category::with(['products'])
            ->orderByDesc('updated_at')
            ->get();
    }

    public static function findAllWithFilters(Request $request): LengthAwarePaginator
    {
        $builder =  Category::with(['products'])
            ->orderByDesc('updated_at');

        $columnSearch = ['name'];

        $serachValue = $request->query('q');

        if ($serachValue !== null && !empty($serachValue)) {
            $builder = SearchData::handle($builder, $serachValue, $columnSearch);
        }

        return $builder->paginate();
    }

    public static function findAllWithRelation(): Collection
    {
        return Category::with(['products'])
            ->orderByDesc('updated_at')
            ->get();
    }

    public static function findOne(int $id): Category
    {
        return Category::with(['products'])
            ->findOrFail($id);
    }
}
