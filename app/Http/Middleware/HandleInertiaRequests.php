<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Inertia\Middleware;
use Tighten\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $locale = Auth::check() ? Auth::user()->locale : Session::get('locale', config('app.locale'));
        return [
                ...parent::share($request),
                'auth' => [
                    'user' => $request->user(),
                ],
                'ziggy' => fn () => [
                    ...(new Ziggy)->toArray(),
                    'location' => $request->url(),
                ],
                'flash' => [
                    'message' => tap($request->session()->get('message'), function () use ($request) {
                        $request->session()->forget('message');
                    }),
                    
                ],
                'translations' => json_decode(file_get_contents(base_path("lang/$locale.json")), true),
                'locale' => $locale,
            ];
    }
}
