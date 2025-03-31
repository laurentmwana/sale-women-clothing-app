<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use App\Queries\PaymentQuery;
use App\Http\Controllers\Controller;

class AdminPaymentController extends Controller
{
    public function index(Request $request): Response
    {
        $payments = PaymentQuery::findAllWithFilters($request);

        return Inertia::render('admin/other/payment/index', [
            'payments' => $payments,
        ]);
    }

    public function show(int $id): Response
    {
        $payment = PaymentQuery::findOne($id);

        return Inertia::render('admin/other/payment/show', [
            'payment' => $payment,
        ]);
    }
}