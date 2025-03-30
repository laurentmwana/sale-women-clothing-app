<?php

namespace App\Http\Controllers\Other;

use Inertia\Inertia;
use Inertia\Response;
use App\Http\Controllers\Controller;
use App\Queries\ProductQuery;

class WelcomeController extends Controller
{
    public function __invoke(): Response
    {
        $products = ProductQuery::findAllLimit(12);

        return Inertia::render('other/welcome/index', [
            'products' => $products
        ]);
    }
}
