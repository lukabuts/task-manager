import NavLink from "@/Components/NavLink";
import CircleCheckIcon from "@/Icons/CircleCheckIcon";
import DashboardIcon from "@/Icons/DashboardIcon";
import LogOutIcon from "@/Icons/LogOutIcon";
import SettingsIcon from "@/Icons/SettingsIcon";
import { Link } from "@inertiajs/react";
const NavCard = ({ className }: { className?: string }) => {
    return (
        <nav
            className={
                " div-container flex flex-col justify-between z-50 custom-nav-class" +
                " " +
                className
            }
        >
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
    );
};

export default NavCard;
