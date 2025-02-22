import { MessageType } from "@/types/global";

const NotificationCard = ({ message }: { message: MessageType }) => {
    return (
        <div
            className="fixed z-50 sm:top-24 sm:max-w-sm w-full sm:-right-full sm:animate-slideInRight animate-popUp h-10  transition-all max-sm:right-0 max-sm:-bottom-full shadow-lg"
            role="alert"
        >
            <div
                className={`${
                    message.type === "success"
                        ? "bg-teal-100 text-teal-900"
                        : message.type === "error"
                        ? "bg-red-100 text-red-900"
                        : ""
                } rounded px-4 py-3 relative shadow-md dark:shadow-gray-700 max-sm:shadow-none max-sm:w-11/12 max-sm:mx-auto overflow-hidden`}
            >
                <div
                    className={`${
                        message.type === "success"
                            ? "bg-teal-500"
                            : message.type === "error"
                            ? "bg-red-500"
                            : ""
                    } absolute h-1 top-0 left-0 animate-widthnone w-0`}
                ></div>
                <div className="flex">
                    <div className="py-1">
                        <svg
                            className={`${
                                message.type === "success"
                                    ? "text-teal-500"
                                    : message.type === "error"
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
                        <p className="font-bold">{message.message}</p>
                        <p className="text-sm">{message.body}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotificationCard;
