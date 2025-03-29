<?php

namespace App\Actions;

use App\Models\Category;
use Illuminate\Support\Facades\DB;
use App\Services\Actions\CategoryActionInterface;

class CategoryAction implements CategoryActionInterface
{

    public function createCategory(array $data): Category
    {
        return DB::transaction(fn() => Category::create($data));
    }

    public function updateCategory(array $data, Category $category): Category
    {
        DB::transaction(fn() => $category->update($data));

        return $category;
    }

    public function deleteCategory(Category $category): bool
    {
        return DB::transaction(fn() => $category->delete());
    }
}
