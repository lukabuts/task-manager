import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="relative flex min-h-svh justify-center gap-32 items-center bg-gray-100 pt-6 sm:pt-0 dark:bg-gray-900 p-10">
            {/* Image only visible on tablet & PC screens */}
            <div className="hidden relative lg:block lg:left-12 p-10 pr-0">
                <img
                    src="/images/logo.png"
                    alt="Logo"
                    className="w-[40rem] z-10 relative"
                />
                <div className="absolute top-0 right-10 rounded-[3rem] bg-white dark:bg-gray-800 w-full h-full"></div>
            </div>

            <div className="w-full sm:max-w-md overflow-hidden">
                <div className="flex items-center justify-center">
                    <h1 className="sm:mb-5 mb-3 sm:text-xl text-base text-gray-600 dark:text-gray-400">
                        Manage Your Tasks With TaskManager!
                    </h1>
                </div>
                <div className="mt-6 w-full bg-white px-6 py-4 lg:px-12 lg:py-8 shadow-md  lg:rounded-3xl rounded-lg dark:bg-gray-800">
                    <div className="flex items-center justify-center"></div>
                    {children}
                </div>
            </div>
        </div>
    );
}
