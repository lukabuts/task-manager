import NavLink from "@/Components/NavLink";
import CircleCheckIcon from "@/Icons/CircleCheckIcon";
import DashboardIcon from "@/Icons/DashboardIcon";
import LogOutIcon from "@/Icons/LogOutIcon";
import SettingsIcon from "@/Icons/SettingsIcon";
import { Link, usePage } from "@inertiajs/react";
import { PropsWithChildren, useState } from "react";
import { Button } from "@/Components/ui/button";
import { PlusIcon, UserIcon } from "lucide-react";

export default function AuthenticatedLayout({ children }: PropsWithChildren) {
    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 grid grid-cols-6 text-gray-900 dark:text-gray-100 gap-6 ">
            <nav className="col-span-1 div-container flex flex-col justify-between custom-nav-class sticky z-10">
                <div>
                    <Link href={route("dashboard")}>
                        <div className="flex items-center gap-2 px-5 py-4 border-b dark:border-b-gray-900 border-gray-100 shadow">
                            <img
                                src="images/logo.jpg"
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
                        active={route().current("tasks.show")}
                        href={route("tasks.show")}
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
            <div className="col-span-5 space-y-6 z-10">
                <header className="div-container sm:p-8 p-4 flex items-center justify-between">
                    <div>
                        <input
                            type="search"
                            className="dark:bg-gray-900 shadow sm:rounded-lg bg-gray-100 border-none outline-none focus:outline-none w-72"
                            placeholder="Search..."
                        />
                    </div>
                    <div className="flex items-center gap-4">
                        <Button className="rounded-2xl">
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
    );
}
