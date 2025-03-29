<?php

use App\Enums\UserRoleEnum;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\DashboardController;

define('MIDD_ADMIN', sprintf("role:%s", UserRoleEnum::ROLE_ADMIN->value));

Route::middleware(['auth', 'verified', MIDD_ADMIN])->group(function () {
    Route::get('dashboard', DashboardController::class)
        ->name('dashboard');
});
