<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class LocaleController extends Controller
{
    public function setLocale(Request $request, $lang)
    {
        if (! in_array($lang, ['en', 'ka'])) {
            abort(400);
        }
        App::setLocale($lang);
        Session::put('locale', $lang);
        if (Auth::check()) {
            User::where('id', Auth::user()->id)->update(['locale' => $lang]);
        }
        
        return back();
    }
}
