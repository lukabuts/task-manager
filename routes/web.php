<?php

use App\Http\Controllers\LocaleController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TaskController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
    Route::inertia('/', 'Dashboard')->name('dashboard');
    Route::controller(ProfileController::class)->prefix('profile')->group(function () {
        Route::get('/', 'edit')->name('profile.edit');
        Route::patch('/', 'update')->name('profile.update');
        Route::delete('/', 'destroy')->name('profile.destroy');
        Route::post('/picture', 'updatePicture')->name('profile.picture');
        Route::patch('/theme', 'updateTheme')->name('profile.theme');
        Route::delete('/picture', 'deletePicture')->name('profile.picture');
    });
    // Tasks
    Route::controller(TaskController::class)->prefix('tasks')->group(function () {
        Route::get('/', 'index')->name('task.index');
        Route::get('/create', 'create')->name('task.create');
        Route::post('/', 'store')->name('task.store');

        Route::middleware('can:edit,task')->where(['id' => '[0-9]+'])->group(function () {
            Route::get('/{task}', 'show')->name('task.show');
            Route::get('/{task}/edit', 'edit')->name('task.edit');
            Route::patch('/{task}', 'update')->name('task.update');
            Route::put('/{task}', 'complete')->name('task.complete');
            Route::delete('/{task}', 'destroy')->name('task.destroy');
        });
    });
});

Route::get('/locale/{lang}', [LocaleController::class, 'setLocale'])->where('lang', 'en|ka')->name('locale.update');


require __DIR__.'/auth.php';
