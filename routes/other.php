<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Other\AboutController;
use App\Http\Controllers\Other\WelcomeController;

Route::get('/', WelcomeController::class)->name('welcome');
Route::get('/about', AboutController::class)->name('other.about');
