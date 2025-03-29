<?php

namespace App\Queries;

use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Searchable\SearchData;
use Illuminate\Support\Collection;
use App\Exceptions\ModelNotFoundException;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

abstract class ProductQuery
{
    public static function findAll(): Collection
    {
        return Product::with(['categories'])
            ->orderByDesc('updated_at')
            ->get();
    }

    public static function findAllLimit(int $limit): Collection
    {
        return Product::with(['categories', 'comments', 'user'])
            ->orderByDesc('updated_at')
            ->limit($limit)
            ->get();
    }

    public static function findAllWithFilters(Request $request): LengthAwarePaginator
    {

        $builder =  Product::with(['categories', 'user', 'comments'])
            ->orderByDesc('updated_at');

        $categoryId = $request->query('category');

        $columnSearch = ['title', 'content', 'image'];

        $serachValue = $request->query('q');

        if ($serachValue !== null && !empty($serachValue)) {
            $builder = SearchData::handle($builder, $serachValue, $columnSearch);
        }

        if ($categoryId !== null) {

            if (!Category::where('id', $categoryId)->exists()) {
                throw new ModelNotFoundException(
                    "La catégorie avec l'ID {$categoryId} n'existe pas."
                );
            }

            $builder->whereHas('categories', function ($query) use ($categoryId) {
                $query->where('id', $categoryId);
            });
        }

        return $builder->paginate();
    }

    public static function findAllWithRelation(Request $request): Collection
    {
        return Product::with(['categories'])
            ->orderByDesc('updated_at')
            ->get();
    }

    public static function findOne(int $id): Product
    {
        return Product::findOrFail($id);
    }

    public static function findOneWithRelation(int $id): Product
    {
        return Product::with([
            'categories',
            'user',
            'comments' => fn($q) => $q->orderByDesc('created_at'),
            'comments.replyComments' => fn($q) => $q->orderByDesc('created_at'),
        ])
            ->findOrFail($id);
    }
}
