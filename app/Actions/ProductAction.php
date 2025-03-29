<?php

namespace App\Actions;

use App\Models\Product;
use App\Services\Actions\ProductActionInterface;
use Illuminate\Support\Facades\DB;

class ProductAction implements ProductActionInterface
{
    public function createProduct(array $data): Product
    {
        return DB::transaction(function () use ($data) {
            $product = Product::create($data);

            $product->categories()->sync($data['categories']);

            return $product;
        });
    }

    public function updateProduct(array $data, Product $product): Product
    {
        return DB::transaction(function () use ($data, $product) {
            $product->update($data);

            $product->categories()->sync($data['categories']);

            return $product;
        });
    }

    public function deleteProduct(Product $product): bool
    {
        return DB::transaction(fn() => $product->delete());
    }
}
