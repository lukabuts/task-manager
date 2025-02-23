import NavLink from "@/Components/NavLink";
import { Link, usePage } from "@inertiajs/react";
import {
    CircleCheck,
    LayoutDashboardIcon,
    LogOutIcon,
    Settings,
    XIcon,
} from "lucide-react";

const NavCard = ({
    className,
    type,
    closeMenu,
    children,
}: {
    className?: string;
    closeMenu?: () => void;
    type: "desktop" | "mobile";
    children?: React.ReactNode;
}) => {
    const { translations } = usePage().props;
    return (
        <>
            <nav
                className={
                    "div-container flex flex-col justify-between z-50 select-none" +
                    " " +
                    className
                }
            >
                <div>
                    <div className="flex items-center justify-between px-5 py-4  border-b dark:border-b-gray-900 border-gray-100 shadow">
                        <Link
                            as="button"
                            href={route("dashboard")}
                            className="flex items-center gap-2"
                        >
                            <img
                                src="/images/logo.jpg"
                                alt="logo"
                                className="size-10 rounded-full border-2 border-black dark:border-white"
                            />
                            <span className="text-xl">Organizer</span>
                        </Link>
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
                        <LayoutDashboardIcon />
                        <span>{translations.layout.nav.dashboard}</span>
                    </NavLink>
                    <NavLink
                        active={route().current("task.index")}
                        href={route("task.index")}
                    >
                        <CircleCheck />
                        <span>{translations.layout.nav.my_tasks}</span>
                    </NavLink>
                    {children}
                </div>
                <div>
                    <NavLink
                        active={route().current("profile.edit")}
                        href={route("profile.edit")}
                    >
                        <Settings />
                        <span>{translations.layout.nav.setting}</span>
                    </NavLink>
                    <NavLink
                        as="button"
                        method="post"
                        href={route("logout")}
                        active={false}
                    >
                        <LogOutIcon />
                        <span>{translations.layout.nav.logout}</span>
                    </NavLink>
                </div>
            </nav>
        </>
    );
};

export default NavCard;
