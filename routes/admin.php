<?php

use App\Enums\UserRoleEnum;
use App\Helpers\Auth\DefineRoleUser;
use App\Http\Controllers\Admin\AdminCategoryController;
use App\Http\Controllers\Admin\AdminStockController;
use App\Http\Controllers\Admin\AdminProductController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\DashboardController;

$adminUserRole = DefineRoleUser::admin();

Route::middleware(['auth', 'verified', $adminUserRole])->group(function () {
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
