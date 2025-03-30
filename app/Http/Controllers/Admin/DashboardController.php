<?php

namespace App\Http\Controllers\Admin;

use App\Enums\PaymentStateEnum;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Stock;
use App\Models\Client;
use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Payment;

class DashboardController extends Controller
{
    public function __invoke()
    {
        return Inertia::render('admin/dashboard/index', [
            'countClient' => Client::count('id'),
            'countUser' => User::count('id'),
            'countStock' => Stock::sum('stock_value'),
            'countProduct' => Product::count('id'),
            'sumPrices' => Payment::whereStatus(PaymentStateEnum::SUCCESS->value)->sum('amount'),
            'countPaymentFail' => Payment::where('status', '!=', PaymentStateEnum::SUCCESS->value)->count('id'),
            'countPaymentSucces' => Payment::whereStatus(PaymentStateEnum::SUCCESS->value)->count('id'),
        ]);
    }
}
