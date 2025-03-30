<?php

use App\Enums\UserRoleEnum;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CreateCardController;
use App\Http\Controllers\Other\AboutController;
use App\Http\Controllers\Other\WelcomeController;
use App\Http\Controllers\Other\CompleteInfoClientController;

define('MIDD_CLIENT', sprintf("role:%s", UserRoleEnum::ROLE_CLIENT->value));

Route::get('/', WelcomeController::class)->name('welcome');
Route::get('/about', AboutController::class)->name('other.about');

Route::middleware(['auth', "verified", MIDD_CLIENT, 'state-client:no-empty'])
    ->group(function () {
        Route::post('/add-product-card/{id}', CreateCardController::class)->name('card.create');
    });

    Route::middleware(['auth', 'verified', MIDD_CLIENT, 'state-client:empty'])
    ->group(function () {

        Route::get('/complete/information/client', [CompleteInfoClientController::class, 'index'])
            ->name('no-empty-client.index');
        Route::post('/complete/information/client/store', [CompleteInfoClientController::class, 'store'])
            ->name('no-empty-client.complete');
    });
