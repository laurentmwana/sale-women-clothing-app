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
        $paymentCounts = Payment::selectRaw('
                SUM(status = ?) as countPaymentSuccess,
                SUM(status != ?) as countPaymentFail,
                SUM(CASE WHEN status = ? THEN amount ELSE 0 END) as sumPrices
            ', [PaymentStateEnum::SUCCESS->value, PaymentStateEnum::SUCCESS->value, PaymentStateEnum::SUCCESS->value])
            ->first();

        $counts = Client::count('id');
        $users = User::count('id');
        $stock = Stock::sum('stock_value');
        $products = Product::count('id');

        return Inertia::render('admin/dashboard/index', [
            'countClient' => $counts,
            'countUser' => $users,
            'countStock' => $stock,
            'countProduct' => $products,
            'sumPrices' => $paymentCounts->sumPrices,
            'countPaymentFail' => $paymentCounts->countPaymentFail,
            'countPaymentSuccess' => $paymentCounts->countPaymentSuccess,
        ]);
    }

}
