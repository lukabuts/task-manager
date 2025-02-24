import { Link, router, usePage } from "@inertiajs/react";
import { PropsWithChildren, useEffect, useState } from "react";
import { Button } from "@/Components/ui/button";
import { EditIcon, MenuIcon, PlusIcon, UserIcon } from "lucide-react";
import { Input } from "@/Components/ui/input";
import NotificationCard from "@/Components/NotificationCard";
import { createPortal } from "react-dom";
import NavCard from "@/Components/NavCard";
import NavLink from "@/Components/NavLink";

export default function AuthenticatedLayout({ children }: PropsWithChildren) {
    const { user } = usePage().props.auth;
    const { flash } = usePage().props;
    const [message, setMessage] = useState(flash.message || null);
    const [isMenuShown, setIsMenuShown] = useState(false);
    const [isMenuClosing, setIsMenuClosing] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const { translations } = usePage().props;
    const xlScreen = 1280;
    const smScreen = 640;

    useEffect(() => {
        const html = document.getElementsByTagName("html")[0];
        const body = document.getElementsByTagName("body")[0];
        const scrollbarWidth =
            window.innerWidth - document.documentElement.clientWidth ||
            body.clientWidth - document.documentElement.clientWidth;

        const isScrollable = window.innerHeight < html.scrollHeight;

        if (isScrollable && isMenuShown && screenWidth < xlScreen) {
            html.style.paddingRight = `${scrollbarWidth}px`;
        } else {
            html.style.paddingRight = "0px";
        }

        if (isMenuShown && screenWidth < xlScreen) {
            html.style.overflow = "hidden";
        } else {
            html.style.overflow = "auto";
        }
    }, [isMenuShown, screenWidth]);

    useEffect(() => {
        if (flash.message) {
            setMessage(flash.message);

            setTimeout(() => {
                setMessage(null);
            }, 3100);
        }
    }, [flash.message]);

    function closeMenu() {
        setIsMenuClosing(true);
        setTimeout(() => {
            setIsMenuShown(false);
            setIsMenuClosing(false);
        }, 150);
    }

    useEffect(() => {
        history.replaceState({}, document.title, window.location.pathname);

        function handleResize() {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        const userPrefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;
        if (user.theme === "dark") {
            document.documentElement.classList.add("dark");
        } else if (user.theme === "light") {
            document.documentElement.classList.remove("dark");
        } else if (user.theme === "system" && userPrefersDark) {
            document.documentElement.classList.add("dark");
        }
    }, [user.theme]);

    return (
        <>
            <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 grid grid-cols-6 text-gray-900 dark:text-gray-100 gap-6 overflow-hidden">
                {screenWidth >= xlScreen && (
                    <div className="relative col-span-1 max-xl:hidden">
                        <NavCard
                            className="fixed w-full max-w-nav h-nav top-6"
                            type="desktop"
                        />
                    </div>
                )}
                {isMenuShown && screenWidth < xlScreen && (
                    <>
                        <div
                            className="absolute bg-black/30 top-0 left-0 w-full h-screen z-40 xl:hidden"
                            onClick={closeMenu}
                        >
                            <NavCard
                                type="mobile"
                                className={`fixed w-full max-w-80 animate-slideFromLeft h-dvh top-0 rounded-none xl:hidden transition-all ${
                                    isMenuClosing ? "-left-96" : "left-0"
                                }`}
                                closeMenu={closeMenu}
                            >
                                {screenWidth < smScreen && (
                                    <NavLink
                                        href={route("task.create")}
                                        active={route().current("task.create")}
                                    >
                                        <EditIcon />
                                        <span>
                                            {
                                                translations.layout.header
                                                    .new_task
                                            }
                                        </span>
                                    </NavLink>
                                )}
                            </NavCard>
                        </div>
                    </>
                )}
                <div className="col-span-5 space-y-6 z-10 max-xl:col-span-6">
                    <header className="div-container p-4 flex items-center justify-between gap-4">
                        <div className="w-full">
                            <Input
                                type="search"
                                className="xl:w-72"
                                placeholder={
                                    translations.layout.header.search + "..."
                                }
                            />
                        </div>
                        <div className="flex items-center gap-4">
                            <Button
                                onClick={() => {
                                    router.get(route("task.create"));
                                }}
                                className="rounded-2xl max-sm:hidden"
                            >
                                <PlusIcon />
                                <span>
                                    {translations.layout.header.new_task}
                                </span>
                            </Button>
                            <div>
                                <Link
                                    href={route("profile.edit")}
                                    className="max-xl:hidden"
                                >
                                    {user.photo ? (
                                        <div className="size-9 border rounded-full overflow-hidden">
                                            <img
                                                src={user.photo}
                                                alt={`${user.name}'s profile picture`}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ) : (
                                        <UserIcon />
                                    )}
                                </Link>
                                <button
                                    className="xl:hidden"
                                    onClick={() => {
                                        setIsMenuShown(!isMenuShown);
                                    }}
                                >
                                    <MenuIcon />
                                </button>
                            </div>
                        </div>
                    </header>
                    <main>{children}</main>
                </div>
            </div>
            {message &&
                createPortal(
                    <NotificationCard message={message} />,
                    document.body
                )}
        </>
    );
}
