<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to {{ config('app.name') }}!</title>
    <style>
        /* Base */
        body,
        body *:not(html):not(style):not(br):not(tr):not(code) {
            box-sizing: border-box;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
                'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
            position: relative;
        }

        body {
            -webkit-text-size-adjust: none;
            background-color: #ffffff;
            color: #718096;
            height: 100%;
            line-height: 1.4;
            margin: 0;
            padding: 0;
            width: 100% !important;
        }

        p,
        ul,
        ol,
        blockquote {
            line-height: 1.4;
            text-align: left;
        }

        a {
            color: #3869d4;
        }

        a img {
            border: none;
        }

        /* Typography */
        h1, h2, h3 {
            color: #3d4852;
            font-weight: bold;
            margin-top: 0;
            text-align: left;
        }

        h1 {
            font-size: 18px;
        }

        h2 {
            font-size: 16px;
        }

        h3 {
            font-size: 14px;
        }

        p {
            font-size: 16px;
            line-height: 1.5em;
            margin-top: 0;
            text-align: left;
        }

        p.sub {
            font-size: 12px;
        }

        img {
            max-width: 100%;
            border-radius: 5px;
        }

        /* Layout */
        .wrapper {
            background-color: #edf2f7;
            margin: 0;
            width: 100%;
        }

        .content {
            margin: 0;
            width: 100%;
        }

        /* Header */
        .header {

            text-align: center;
        }

        .header a {
            color: #3d4852;
            font-size: 19px;
            font-weight: bold;
            text-decoration: none;
        }

        /* Logo */
        .logo {
            height: 75px;
            max-height: 75px;
            width: 75px;
        }

        /* Body */
        .body {
            background-color: #edf2f7;
            border-bottom: 1px solid #edf2f7;
            border-top: 1px solid #edf2f7;
            margin: 0;
            padding: 0;
            width: 100%;
        }

        .inner-body {
            background-color: #ffffff;
            border-color: #e8e5ef;
            border-radius: 2px;
            border-width: 1px;
            box-shadow: 0 2px 0 rgba(0, 0, 150, 0.025), 2px 4px 0 rgba(0, 0, 150, 0.015);
            margin: 0 auto;
            padding: 30px 20px;
            width: 570px;
        }

        .inner-body a {
            word-break: break-all;
        }

        /* Footer */
        .footer {
            margin: 0 auto;
            padding: 10px 0;
            text-align: center;
            width: 570px;
        }

        .footer p {
            color: #b0adc5;
            font-size: 12px;
            text-align: center;
        }

        .footer a {
            color: #b0adc5;
            text-decoration: underline;
        }

        /* Buttons */
        .action {
            margin: 30px auto;
            padding: 0;
            text-align: center;
            width: 100%;
        }

        .button {
            -webkit-text-size-adjust: none;
            border-radius: 4px;
            color: #fff;
            display: inline-block;
            overflow: hidden;
            text-decoration: none;
        }

        .button-blue {
            background-color: #2d3748;
            border-bottom: 8px solid #2d3748;
            border-left: 18px solid #2d3748;
            border-right: 18px solid #2d3748;
            border-top: 8px solid #2d3748;
        }

        /* Utilities */
        .center {
            text-align: center;
        }

        a{
            text-decoration: none;
            color: #fff;
        }
    </style>
</head>
<body class="body">
    <div class="wrapper">
        <div class="inner-body">
            <div class="content">
                <div class="header">
                    <img class="logo" src="{{ asset('images/logo.png') }}" alt="{{ config('app.name') }} Logo">
                </div>
                <div>
                    <p>Hi, {{ explode(" ", $user->name)[0] }},</p>
                    <p>Welcome to {{ config('app.name') }}! We're excited to help you organize your tasks and stay on top of everything.</p>
                    <p>Before you get started, please verify your email to activate your account.</p>
                    <div class="center">
                        <button class="button-blue button">
                            <a href="{{ url('/verify-email') }}" class="">Verify Email</a>
                        </button>  
                    </div>      
                </div>
            </div>
        </div>
    </div>
    <div class="footer">
        <p>© {{ date('Y') }} {{ config('app.name') }}. All rights reserved.</p>
    </div>
</body>
</html>
