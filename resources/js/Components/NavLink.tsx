import { InertiaLinkProps, Link } from "@inertiajs/react";

export default function NavLink({
    active = false,
    className = "",
    children,
    ...props
}: InertiaLinkProps & { active: boolean }) {
    return (
        <Link
            {...props}
            className={
                " flex items-center gap-2 pr-5 pl-3 py-4 border-b border-b-gray-300 border-l-8 dark:border-b-gray-900 border-gray-100ease-in-out focus:outline-none last:border-b-0 shadow w-full " +
                (active
                    ? " font-bold bg-yellow-light dark:bg-yellow-dark border-l-yellow "
                    : " border-l-transparent") +
                className
            }
        >
            {children}
        </Link>
    );
}
