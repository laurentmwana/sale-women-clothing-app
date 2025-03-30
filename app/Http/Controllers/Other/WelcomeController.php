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
        $products = ProductQuery::findAllLimit(9);

        return Inertia::render('welcome/index', [
            'products' => $products
        ]);
    }
}
