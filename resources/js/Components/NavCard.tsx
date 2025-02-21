import NavLink from "@/Components/NavLink";
import CircleCheckIcon from "@/Icons/CircleCheckIcon";
import DashboardIcon from "@/Icons/DashboardIcon";
import LogOutIcon from "@/Icons/LogOutIcon";
import SettingsIcon from "@/Icons/SettingsIcon";
import { XIcon } from "lucide-react";
import { useEffect, useState } from "react";
const NavCard = ({
    className,
    setIsMenuShown,
    isMenuShown,
    type,
    closeMenu,
}: {
    className?: string;
    setIsMenuShown?: (open: boolean) => void;
    closeMenu?: () => void;
    isMenuShown?: boolean;
    type: "desktop" | "mobile";
}) => {
    return (
        <>
            <nav
                className={
                    "div-container flex flex-col justify-between z-50 transition-all" +
                    " " +
                    className
                }
            >
                <div>
                    <div className="flex items-center justify-between px-5 py-4  border-b dark:border-b-gray-900 border-gray-100 shadow">
                        <div className="flex items-center gap-2">
                            <img
                                src="/images/logo.jpg"
                                alt="logo"
                                className="size-10 rounded-full border-2 border-black dark:border-white"
                            />
                            <span className="text-xl">Organizer</span>
                        </div>
                        {type === "mobile" && (
                            <button onClick={closeMenu}>
                                <XIcon />
                            </button>
                        )}
                    </div>

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
        </>
    );
};

export default NavCard;
