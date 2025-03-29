<?php

use App\Enums\MobileMoneyEnum;
use App\Enums\PaymentStateEnum;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('payments', function (Blueprint $table) {
            $table->id();
            $table->enum(
                'mobile_money_name',
                array_map(fn(MobileMoneyEnum $enum) => $enum->value, MobileMoneyEnum::cases())
            )->default(MobileMoneyEnum::VODACOM->value);
            $table->dateTime('payment_at')->nullable();
            $table->enum(
                'status',
                array_map(fn(PaymentStateEnum $enum) => $enum->value, PaymentStateEnum::cases())
            )->default(PaymentStateEnum::PENDING->value);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('payments');
    }
};
