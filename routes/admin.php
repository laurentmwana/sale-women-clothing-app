<?php

use App\Enums\UserRoleEnum;
use App\Http\Controllers\Admin\AdminCategoryController;
use App\Http\Controllers\Admin\AdminStockController;
use App\Http\Controllers\Admin\AdminProductController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\DashboardController;

define('MIDD_ADMIN', sprintf("role:%s", UserRoleEnum::ROLE_ADMIN->value));

Route::middleware(['auth', 'verified', MIDD_ADMIN])->group(function () {
    Route::get('dashboard', DashboardController::class)
        ->name('dashboard');



    Route::prefix('admin')
        ->name('#')
        ->group(function () {

            Route::resource('category', AdminCategoryController::class)
                ->parameter('category', 'id')
                ->except(['edit', 'create']);

            Route::resource('product', AdminProductController::class)
                ->parameter('product', 'id');

            Route::resource('stock', AdminStockController::class)
                ->parameter('stock', 'id')
                ->except(['edit', 'create']);
        });
});
