<x-mail::message>
# Hello, {{ $data['name'] }} 👋

We noticed a new login to your account from the following email: **{{ $data['email'] }}**.


If this was you, you can safely ignore this email. If this wasn't you, please secure your account immediately by changing your password and enabling two-factor authentication.

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
