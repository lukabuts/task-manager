<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
    Route::inertia('/', 'Dashboard')->name('dashboard');
    Route::inertia('/tasks', 'Tasks/Show')->name('tasks.show');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::post('/profile/picture', [ProfileController::class, 'updatePicture'])->name('profile.picture');
    Route::delete('/profile/picture', [ProfileController::class, 'deletePicture'])->name('profile.picture');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
