<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CreateCardController;
use App\Http\Controllers\Other\CardController;
use App\Http\Controllers\Other\AboutController;
use App\Http\Controllers\Other\PaymentController;
use App\Http\Controllers\Other\ProductController;
use App\Http\Controllers\Other\WelcomeController;
use App\Http\Controllers\Other\CompleteInfoClientController;

Route::get('/', WelcomeController::class)->name('welcome');
Route::get('/about', AboutController::class)->name('other.about');

Route::middleware(['auth', "verified", 'state-client:no-empty'])
    ->group(function () {
        Route::post('/add-product-card/{id}', CreateCardController::class)->name('card.create');

        Route::get('/card', CardController::class)
            ->name('card.index');

        Route::post('/payment/card/{id}', [PaymentController::class, 'pay'])
            ->name('payment.pay');

        Route::get('/payments', [PaymentController::class, 'index'])
            ->name('payment.index');
    });

Route::middleware(['auth', 'verified', 'state-client:empty'])
    ->group(function () {

        Route::get('/complete/information/client', [CompleteInfoClientController::class, 'index'])
            ->name('no-empty-client.index');
        Route::post('/complete/information/client/store', [CompleteInfoClientController::class, 'store'])
            ->name('no-empty-client.complete');
    });

Route::get('/product', [ProductController::class, 'index'])
    ->name('product.index');

Route::get('/product/{slug}/{id}', [ProductController::class, 'show'])
    ->name('product.show');
