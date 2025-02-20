import { NotificationProps } from "@/types/global";

const NotificationCard = ({ message, body, type }: NotificationProps) => {
    return (
        <div
            className="fixed z-50 max-w-sm w-full bottom-10 sm:right-4 right-2 animate-slideInRight"
            role="alert"
        >
            <div
                className={`${
                    type === "success"
                        ? "bg-teal-100 text-teal-900"
                        : type === "error"
                        ? "bg-red-100 text-red-900"
                        : ""
                } rounded px-4 py-3 relative shadow-md dark:shadow-muted `}
            >
                <div
                    className={`${
                        type === "success"
                            ? "bg-teal-500"
                            : type === "error"
                            ? "bg-red-500"
                            : ""
                    } absolute h-1 top-0 left-0 animate-widthnone w-0`}
                ></div>
                <div className="flex">
                    <div className="py-1">
                        <svg
                            className={`${
                                type === "success"
                                    ? "text-teal-500"
                                    : type === "error"
                                    ? "text-red-500"
                                    : ""
                            } fill-current h-6 w-6 mr-4`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                        </svg>
                    </div>
                    <div>
                        <p className="font-bold">{message}</p>
                        <p className="text-sm">{body}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotificationCard;
