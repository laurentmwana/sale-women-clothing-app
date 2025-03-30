<?php

namespace App\Actions;

use App\Models\Payment;
use Illuminate\Support\Facades\DB;
use App\Services\Actions\PaymentActionInterface;

class PaymentAction implements PaymentActionInterface
{

    public function createPayment(array $data): Payment
    {
        return DB::transaction(fn() => Payment::create($data));
    }

    public function updatePayment(array $data, Payment $payment): Payment
    {
        DB::transaction(fn() => $payment->update($data));

        return $payment;
    }

    public function deletePayment(Payment $payment): bool
    {
        return DB::transaction(fn() => $payment->delete());
    }
}
