<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Stock;
use App\Models\Client;
use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DashboardController extends Controller
{
    public function __invoke()
    {
        return Inertia::render('admin/dashboard/index', [
            'countClient' => Client::count('id'),
            'countUser' => User::count('id'),
            'countStock' => Stock::sum('stock_value'),
            'countProduct' => Product::count('id'),
        ]);
    }
}
