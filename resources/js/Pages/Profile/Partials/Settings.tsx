import { Link, router, useForm, usePage } from "@inertiajs/react";
import SectionHeader from "./SectionHeader";
import { ProfilePartialProps } from "@/types/global";
import { useEffect } from "react";
import { MoonIcon, SunIcon } from "lucide-react";

const Settings = ({ className, translations }: ProfilePartialProps) => {
    const { user } = usePage().props.auth;
    const { data, setData, patch } = useForm({ theme: user.theme });

    useEffect(() => {
        if (data.theme !== user.theme) {
            patch(route("profile.theme"));
        }
    }, [data.theme]);

    return (
        <section className={className}>
            <SectionHeader
                title={translations.setting_page.settings.title}
                description={translations.setting_page.settings.description}
            />

            {/* Language Switcher */}
            <div className=" mt-4">
                <p className="text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                    {translations.setting_page.settings.language}
                </p>
                <div className="flex gap-4">
                    <Link
                        href={route("locale.update", "ka")}
                        className="flex items-center gap-2"
                    >
                        <img
                            src="/images/georgia-flag-icon.svg"
                            alt={translations.locales.ka}
                            className="w-6 h-6"
                        />
                        <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                            {translations.locales.ka}
                        </span>
                    </Link>

                    <Link
                        href={route("locale.update", "en")}
                        className="flex items-center gap-2"
                    >
                        <img
                            src="/images/united-states-flag-icon.svg"
                            alt={translations.locales.en}
                            className="w-6 h-6"
                        />
                        <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                            {translations.locales.en}
                        </span>
                    </Link>
                </div>
            </div>

            {/* Dark Mode Toggle */}
            <div className="mt-6">
                <p className="text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                    {translations.setting_page.settings.theme}
                </p>
                <div className="flex gap-2">
                    <button
                        disabled={user.theme === "light"}
                        onClick={() => {
                            router.patch(route("profile.theme"), {
                                theme: "light",
                            });
                        }}
                    >
                        <SunIcon />
                    </button>
                    <div className="relative w-14 h-7">
                        <input
                            type="checkbox"
                            id="dark-mode"
                            className="hidden"
                            onChange={() => {
                                setData(
                                    "theme",
                                    user.theme === "dark" ? "light" : "dark"
                                );
                            }}
                        />
                        <label
                            htmlFor="dark-mode"
                            className="block w-full h-full bg-gray-200 dark:bg-gray-700 rounded-full cursor-pointer relative transition-all"
                        >
                            <span
                                className={`${
                                    user.theme === "dark" ? "left-8" : " left-1"
                                } absolute top-1 w-5 h-5 bg-white dark:bg-gray-300 rounded-full transition-all shadow-md peer-checked:left-8`}
                            ></span>
                        </label>
                    </div>
                    <button
                        disabled={user.theme === "dark"}
                        onClick={() => {
                            router.patch(route("profile.theme"), {
                                theme: "dark",
                            });
                        }}
                    >
                        <MoonIcon />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Settings;
