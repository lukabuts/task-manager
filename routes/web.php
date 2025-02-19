<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TaskController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
    Route::inertia('/', 'Dashboard')->name('dashboard');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::post('/profile/picture', [ProfileController::class, 'updatePicture'])->name('profile.picture');
    Route::delete('/profile/picture', [ProfileController::class, 'deletePicture'])->name('profile.picture');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

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

require __DIR__.'/auth.php';
