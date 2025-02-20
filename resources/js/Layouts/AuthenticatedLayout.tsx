import NavLink from "@/Components/NavLink";
import CircleCheckIcon from "@/Icons/CircleCheckIcon";
import DashboardIcon from "@/Icons/DashboardIcon";
import LogOutIcon from "@/Icons/LogOutIcon";
import SettingsIcon from "@/Icons/SettingsIcon";
import { Link, router, usePage } from "@inertiajs/react";
import { PropsWithChildren, useEffect, useState } from "react";
import { Button } from "@/Components/ui/button";
import { PlusIcon, UserIcon } from "lucide-react";
import { Input } from "@/Components/ui/input";
import NotificationCard from "@/Components/NotificationCard";
import { createPortal } from "react-dom";

export default function AuthenticatedLayout({ children }: PropsWithChildren) {
    const { user } = usePage().props.auth;
    const { flash } = usePage().props;
    const [message, setMessage] = useState(flash.message || null);

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
    return (
        <>
            <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 grid grid-cols-6 text-gray-900 dark:text-gray-100 gap-6 ">
                <nav className="max-xl:hidden col-span-1 div-container flex flex-col justify-between custom-nav-class sticky z-10">
                    <div>
                        <Link href={route("dashboard")}>
                            <div className="flex items-center gap-2 px-5 py-4 border-b dark:border-b-gray-900 border-gray-100 shadow">
                                <img
                                    src="/images/logo.jpg"
                                    alt="logo"
                                    className="size-10 rounded-full border-2 border-black dark:border-white"
                                />
                                <span className="text-xl">Organizer</span>
                            </div>
                        </Link>

                        <NavLink
                            active={route().current("dashboard")}
                            href={route("dashboard")}
                        >
                            <DashboardIcon />
                            <span>Dashboard</span>
                        </NavLink>
                        <NavLink
                            active={route().current("task.index")}
                            href={route("task.index")}
                        >
                            <CircleCheckIcon />
                            <span>My tasks</span>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink
                            active={route().current("profile.edit")}
                            href={route("profile.edit")}
                        >
                            <SettingsIcon />
                            <span>Settings</span>
                        </NavLink>
                        <NavLink
                            as="button"
                            method="post"
                            href={route("logout")}
                            active={false}
                        >
                            <LogOutIcon />
                            <span> Log Out</span>
                        </NavLink>
                    </div>
                </nav>
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
                            <Link href={route("profile.edit")}>
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
