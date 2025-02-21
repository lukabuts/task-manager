import { Link, router, usePage } from "@inertiajs/react";
import { PropsWithChildren, useEffect, useState } from "react";
import { Button } from "@/Components/ui/button";
import { MenuIcon, PlusIcon, UserIcon } from "lucide-react";
import { Input } from "@/Components/ui/input";
import NotificationCard from "@/Components/NotificationCard";
import { createPortal } from "react-dom";
import NavCard from "@/Components/NavCard";

export default function AuthenticatedLayout({ children }: PropsWithChildren) {
    const { user } = usePage().props.auth;
    const { flash } = usePage().props;
    const [message, setMessage] = useState(flash.message || null);
    const [isMenuShown, setIsMenuShown] = useState(false);
    const [isMenuClosing, setIsMenuClosing] = useState(false);

    useEffect(() => {
        if (isMenuShown) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isMenuShown]);

    useEffect(() => {
        if (flash.message) {
            setMessage(flash.message);

            setTimeout(() => {
                setMessage(null);
            }, 2900);
        }
    }, [flash.message]);

    useEffect(() => {
        history.replaceState({}, document.title, window.location.pathname);
    }, []);

    function closeMenu() {
        setIsMenuClosing(true);
        setTimeout(() => {
            setIsMenuShown(false);
            setIsMenuClosing(false);
        }, 100);
    }
    return (
        <>
            <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 grid grid-cols-6 text-gray-900 dark:text-gray-100 gap-6 ">
                <NavCard
                    className="max-xl:hidden sticky h-nav top-6"
                    type="desktop"
                />
                {isMenuShown && (
                    <>
                        <div
                            className="absolute bg-black/30 top-0 left-0 w-full h-screen z-40"
                            onClick={closeMenu}
                        >
                            <NavCard
                                type="mobile"
                                className={`fixed w-full max-w-80 animate-slideFromLeft h-dvh top-0 left-0 rounded-none ${
                                    isMenuClosing ? "-left-full" : ""
                                }`}
                                setIsMenuShown={setIsMenuShown}
                                closeMenu={closeMenu}
                            />
                        </div>
                    </>
                )}
                <div className="col-span-5 space-y-6 z-10 max-xl:col-span-6">
                    <header className="div-container p-4 flex items-center justify-between gap-4">
                        <div className="w-full">
                            <Input
                                type="search"
                                className="xl:w-72"
                                placeholder="Search..."
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
                                <span>New task</span>
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
