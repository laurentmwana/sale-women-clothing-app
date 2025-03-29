<?php

namespace App\Services\Actions;

use App\Models\Product;

interface ProductActionInterface
{
    public function createProduct(array $data): Product;

    public function updateProduct(array $data, Product $Product): Product;

    public function deleteProduct(Product $Product): bool;
}
