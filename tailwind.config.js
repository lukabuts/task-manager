import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.tsx",
    ],
    safelist: ["low-priority", "medium-priority", "high-priority"],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            keyframes: {
                "animate-widthnone": {
                    "0%": { width: "100%" },
                    "100%": { width: "0%" },
                },
                slideInRight: {
                    "0%": { right: "-130px" },
                    "3%": { right: "2rem" },
                    "97%": { right: "2rem" },
                    "100%": { right: "-130px" },
                },
                popUp: {
                    "0%": { bottom: "-30px" },
                    "3%": { bottom: "2.5rem" },
                    "97%": { bottom: "2.5rem" },
                    "100%": { bottom: "-30px" },
                },
                slideFromLeft: {
                    "0%": { transform: "translateX(-100%)" },
                    "100%": { transform: "translateX(0)" },
                },
            },
            animation: {
                widthnone: "animate-widthnone 3s linear",
                slideInRight: "slideInRight 3.1s ease-out",
                slideFromLeft: "slideFromLeft 0.15s ease-out",
                popUp: "popUp 3.1s ease-out",
            },
            height: {
                nav: "calc(100dvh - 3rem)",
            },
            minHeight: {
                dashboard: "calc(100dvh - 142px)",
            },
            maxWidth: {
                nav: "calc(100vw / 6 - 1.9rem)",
            },
            colors: {
                yellow: {
                    light: "#FAF2D3",
                    DEFAULT: "#F4CE14",
                    dark: "#F29727",
                },
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                chart: {
                    1: "hsl(var(--chart-1))",
                    2: "hsl(var(--chart-2))",
                    3: "hsl(var(--chart-3))",
                    4: "hsl(var(--chart-4))",
                    5: "hsl(var(--chart-5))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
        },
    },

    plugins: [forms, require("tailwindcss-animate")],
};
