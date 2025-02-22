<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return Redirect::route('profile.edit');
    }

    public function updatePicture(Request $request)
    {
        $request->validate([
                'photo' => ['required','image','mimes:jpeg,png,jpg,webp','max:1024'],
            ]);

        $user = $request->user();

        if ($request->hasFile('photo')) {
            $imagePath = "/storage/".$request->file('photo')->store('profile_images', 'public');
            if ($user->photo) {
                Storage::disk('public')->delete(str_replace('/storage/', '', $user->photo));
            }

            $user->photo = $imagePath;
            $user->save();
        }

        return redirect()->route('profile.edit');
    }

    public function deletePicture(Request $request)
    {
        $user = $request->user();
        if ($user->photo) {
            Storage::disk('public')->delete(str_replace('/storage/', '', $user->photo));
            $user->photo = null;
            $user->save();
        }

        return redirect()->route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }

    public function updateTheme(Request $request)
    {
        $request->validate([
                'theme' => ['required', 'in:dark,light'],
            ]);

        $user = $request->user();

        $user->theme = $request->theme;
        $user->save();

        return redirect()->route('profile.edit');

    }
}
