<?php

use App\Helpers\Auth\DefineRoleUser;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\AdminUserController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\AdminStockController;
use App\Http\Controllers\Admin\AdminPaymentController;
use App\Http\Controllers\Admin\AdminProductController;
use App\Http\Controllers\Admin\AdminCategoryController;

$adminUserRole = DefineRoleUser::admin();

Route::middleware(['auth', 'verified', $adminUserRole])->group(function () {
    Route::get('dashboard', DashboardController::class)
        ->name('dashboard');


    Route::prefix('admin')
        ->name('#')
        ->group(function () {

        Route::resource('user', AdminUserController::class)
            ->parameter('user', 'id')
            ->except(['edit', 'create']);

            Route::resource('category', AdminCategoryController::class)
                ->parameter('category', 'id')
                ->except(['edit', 'create']);

            Route::resource('product', AdminProductController::class)
                ->parameter('product', 'id');

            Route::resource('stock', AdminStockController::class)
                ->parameter('stock', 'id')
                ->except(['edit', 'create']);

                Route::get('/payment', [AdminPaymentController::class, 'index'])
                ->name('payment.index');

                Route::get('payment/{id}', [AdminPaymentController::class, 'show'])
                ->name('payment.show');
        });
});
