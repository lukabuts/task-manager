<?php

use App\Http\Controllers\LocaleController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TaskController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
    Route::inertia('/', 'Dashboard/Index')->name('dashboard');
    Route::controller(ProfileController::class)->prefix('profile')->group(function () {
        Route::get('/', 'edit')->name('profile.edit');
        Route::patch('/', 'update')->name('profile.update')->middleware('password.confirm');
        Route::delete('/', 'destroy')->name('profile.destroy');
        Route::patch('/theme', 'updateTheme')->name('profile.theme');
        Route::post('/picture', 'updatePicture')->name('profile.picture.update');
        Route::delete('/picture', 'deletePicture')->name('profile.picture.destroy');
    });
    // Tasks
    Route::controller(TaskController::class)->prefix('tasks')->group(function () {
        Route::get('/', 'index')->name('tasks.index');
        Route::get('/create', 'create')->name('tasks.create');
        Route::post('/', 'store')->name('tasks.store');

        Route::middleware('can:edit,task')->where(['id' => '[0-9]+'])->group(function () {
            Route::get('/{task}', 'show')->name('tasks.show');
            Route::get('/{task}/edit', 'edit')->name('tasks.edit');
            Route::patch('/{task}', 'update')->name('tasks.update');
            Route::patch('/{task}/complete', 'complete')->name('tasks.complete');
            Route::delete('/{task}', 'destroy')->name('tasks.destroy');
        });
    });
});

Route::get('/locale/{lang}', [LocaleController::class, 'setLocale'])->where('lang', 'en|ka')->name('locale.update');

require __DIR__.'/auth.php';
