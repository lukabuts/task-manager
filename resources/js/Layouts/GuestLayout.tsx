import { PropsWithChildren } from "react";

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="relative flex min-h-svh justify-center gap-32 items-center bg-gray-100 pt-6 sm:pt-0 dark:bg-gray-900 p-10">
            <div className="hidden relative lg:block lg:left-12 p-10 pr-0">
                <img
                    src="/images/cover.png"
                    alt="Cover"
                    className="w-[40rem] z-10 relative"
                />
                <div className="absolute top-0 right-10 rounded-[3rem] bg-white dark:bg-gray-800 w-full h-full shadow"></div>
            </div>

            <div className="w-full sm:max-w-md overflow-hidden">
                <div className="flex flex-col items-center gap-5">
                    <img
                        src="/images/logo.jpg"
                        alt="Logo"
                        className="size-28 rounded-full border-2 border-black dark:border-white"
                    />
                    <h1 className="sm:mb-5 mb-3 sm:text-xl text-base text-gray-600 dark:text-gray-400">
                        Manage Your Tasks With Organizer!
                    </h1>
                </div>
                <div className="mt-6 w-full bg-white px-6 py-4 lg:px-12 lg:py-8  lg:rounded-3xl rounded-lg dark:bg-gray-800 shadow">
                    {children}
                </div>
            </div>
        </div>
    );
}
