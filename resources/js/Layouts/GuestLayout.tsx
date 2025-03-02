import { router, usePage } from "@inertiajs/react";
import { PropsWithChildren, useEffect } from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui";

export default function Guest({ children }: PropsWithChildren) {
    const { translations, locale } = usePage().props;
    function changeLocale(locale: "en" | "ka") {
        router.get(route("locale.update", locale));
    }

    useEffect(() => {
        const userPrefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;

        if (userPrefersDark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, []);
    return (
        <div className="relative flex min-h-svh justify-center gap-32 items-center bg-gray-100 pt-6 sm:pt-0 dark:bg-gray-900 sm:p-10 p-5">
            <div className="hidden relative lg:block lg:left-12 p-10 pr-0">
                <img
                    src="/images/cover.png"
                    alt="Cover"
                    className="w-[40rem] z-10 relative"
                />
                <div className="absolute top-0 right-10 rounded-[3rem] bg-white dark:bg-gray-800 w-full h-full shadow"></div>
            </div>

            <div className="w-full sm:max-w-md overflow-hidden">
                <div className="flex flex-col items-center gap-5">
                    <img
                        src="/images/logo.jpg"
                        alt="Logo"
                        className="size-28 rounded-full border-2 border-black dark:border-white"
                    />
                    <h1 className="text-xl text-center max-sm:hidden text-gray-600 dark:text-gray-400">
                        {translations.auth.welcome}
                    </h1>
                </div>
                <div className="mt-6 w-full bg-white px-6 py-4 lg:px-12 lg:py-8 lg:rounded-3xl rounded-lg dark:bg-gray-800 shadow">
                    {children}
                </div>
            </div>
            <div className="flex gap-4 fixed top-4 right-4 z-50 bg-gray-100 dark:bg-gray-900">
                <Select
                    value={locale}
                    onValueChange={(e) => {
                        if (e === "ka") {
                            changeLocale("ka");
                        } else if (e === "en") {
                            changeLocale("en");
                        }
                    }}
                >
                    <SelectTrigger className="w-[180px] dark:border-gray-700">
                        <SelectValue placeholder="Select Language" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-100 dark:bg-gray-900 dark:border-gray-700">
                        <SelectGroup>
                            <SelectLabel>Languages</SelectLabel>
                            <SelectItem value="ka">
                                <button className="flex items-center gap-2">
                                    <img
                                        src="/images/georgia-flag-icon.svg"
                                        alt={translations.locales.ka}
                                        className="w-6 h-6"
                                    />
                                    <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                                        {translations.locales.ka}
                                    </span>
                                </button>
                            </SelectItem>
                            <SelectItem value="en">
                                <button className="flex items-center gap-2">
                                    <img
                                        src="/images/united-states-flag-icon.svg"
                                        alt={translations.locales.en}
                                        className="w-6 h-6"
                                    />
                                    <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                                        {translations.locales.en}
                                    </span>
                                </button>
                            </SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
}
