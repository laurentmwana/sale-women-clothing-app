<?php

namespace App\Http\Controllers\Admin\Blog;

use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Queries\ProductQuery;
use App\Actions\ProductAction;
use App\Http\Controllers\Controller;
use App\Http\Requests\ProductRequest;
use Illuminate\Http\RedirectResponse;
use App\Helpers\DataValues\DataFormatter;
use App\Services\Upload\PublicFileUpload;

class AdminProductController extends Controller
{
    private string $pathImage = "products";

    public function __construct(
        private ProductAction $productAction,
        private PublicFileUpload $upload
    ) {}


    public function index(Request $request): Response
    {
        $products = ProductQuery::findAllWithFilters($request);

        $categoriesFormatter = DataFormatter::getCategories();

        return Inertia::render('admin/product/index', [
            'products' => $products,
            'categories' => $categoriesFormatter,
        ]);
    }

    public function show(int $id): Response
    {
        $product = ProductQuery::findOneWithRelation($id);

        return Inertia::render('admin/product/show', [
            'product' => $product,
        ]);
    }

    public function create(): Response
    {
        $categoriesFormatter = DataFormatter::getCategories();

        return Inertia::render('admin/product/create', [
            'categories' => $categoriesFormatter
        ]);
    }

    public function store(ProductRequest $request): RedirectResponse
    {
        $imageUrl = $this->upload->create(
            $request->validated('image'),
            $this->pathImage
        );

        $user = $request->user();

        $data = [
            ...$request->validated(),
            'image' => $imageUrl,
            'user_id' => $user->id,
            'slug' => Str::slug($request->validated('name')),
        ];

        $this->productAction->createproduct($data);

        return redirect()->route('#product.index')->with('toast', 'produit créé');
    }

    public function edit(int $id): Response
    {
        $product = ProductQuery::findOneWithRelation($id);

        $categoriesFormatter = DataFormatter::getCategories();

        return Inertia::render('admin/product/edit', [
            'product' => $product,
            'categories' => $categoriesFormatter,
        ]);
    }

    public function update(ProductRequest $request, int $id): RedirectResponse
    {
        $product = ProductQuery::findOne($id);

        $imageUrl = $this->upload->update(
            $request->validated('image'),
            $this->pathImage,
            $product->image,
        );

        $data = [
            ...$request->validated(),
            'image' => $imageUrl,
            'slug' => Str::slug($request->validated('title')),
        ];

        $this->productAction->updateproduct($data, $product);

        return redirect()->route('#product.index')
            ->with('toast', 'produit modifié');
    }


    public function destroy(Request $request, int $id): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $product = ProductQuery::findOne($id);

        $this->productAction->deleteproduct($product);

        return redirect()->route('#product.index')->with('toast', 'produit supprimé');
    }
}
