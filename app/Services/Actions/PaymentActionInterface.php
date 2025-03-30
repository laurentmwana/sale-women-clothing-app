<?php

namespace App\Services\Actions;

use App\Models\Payment;

interface PaymentActionInterface
{
    public function createPayment(array $data): Payment;

    public function updatePayment(array $data, Payment $payment): Payment;

    public function deletePayment(Payment $payment): bool;
}
