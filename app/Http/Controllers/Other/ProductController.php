<?php

namespace App\Http\Controllers\Other;

use App\Exceptions\SlugNotFoundException;
use App\Helpers\DataValues\DataFormatter;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Queries\CategoryQuery;
use App\Queries\ProductQuery;

class ProductController extends Controller
{
    public function index(Request $request): Response
    {
        $products = ProductQuery::findAllWithFilters($request);
        $categories = CategoryQuery::findAll();

        return Inertia::render('other/product/index', [
            'products' => $products,
            'categories' => $categories,
        ]);
    }


    public function show(string $slug, int $id): Response
    {
        $product = ProductQuery::findOneWithRelation($id);

        if ($slug !== $product->slug) {
            throw new SlugNotFoundException("Nous n'avons pas trouvé le produit #{$slug}");
        }

        return Inertia::render('other/product/show', [
            'product' => $product,
        ]);
    }
}
