<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use App\Queries\CategoryQuery;
use App\Actions\CategoryAction;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use App\Http\Requests\CategoryRequest;

class AdminCategoryController extends Controller
{

    public function __construct(private CategoryAction $categoryAction) {}

    public function index(Request $request): Response
    {
        $categories = CategoryQuery::findAllWithFilters($request);

        return Inertia::render('admin/category/index', [
            'categories' => $categories,
        ]);
    }

    public function show(int $id): Response
    {
        $category = CategoryQuery::findOne($id);

        return Inertia::render('admin/category/show', [
            'category' => $category,
        ]);
    }

    public function store(CategoryRequest $request): RedirectResponse
    {
        $this->categoryAction->createCategory($request->validated());

        return redirect()->route('#category.index')->with('toast', 'categorie créée');
    }

    public function update(CategoryRequest $request, int $id): RedirectResponse
    {
        $category = CategoryQuery::findOne($id);

        $this->categoryAction->updateCategory($request->validated(), $category);

        return redirect()->route('#category.index')->with('toast', 'categorie modifiée');
    }

    public function destroy(Request $request, int $id): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $category = CategoryQuery::findOne($id);

        $this->categoryAction->deleteCategory($category);

        return redirect()->route('#category.index')->with('toast', 'categorie supprimée');
    }
}
