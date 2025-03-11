import { Task } from "@/types/global";
import clsx from "clsx";
import { format } from "date-fns";
import { CheckCircleIcon, Circle } from "lucide-react";
import { Link, router, usePage } from "@inertiajs/react";

const TaskCard = ({ task }: { task: Task }) => {
    const { translations } = usePage().props;
    task.due_date = task.due_date.split("T")[0];
    task.completed_at = task.completed_at?.split("T")[0] || null;
    const isOverdue =
        (task.completed &&
            task.completed_at &&
            task.completed_at > task.due_date) ||
        (!task.completed &&
            task.due_date < new Date().toISOString().split("T")[0]);

    return (
        <Link
            href={route("tasks.show", task.id)}
            key={task.id}
            className="flex items-center justify-between div-container p-4 gap-4 rounded-xl border dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
            <div className="flex flex-col gap-2 min-w-0">
                <h3 className="text-base font-semibold line-clamp-1 break-words">
                    {task.name}
                </h3>

                <div className="flex items-center gap-2 flex-wrap">
                    <span
                        className={clsx("px-2 py-1 rounded-md font-medium", {
                            "bg-green-100 text-green-700":
                                task.priority === "low",
                            "bg-yellow-100 text-yellow-700":
                                task.priority === "medium",
                            "bg-red-100 text-red-700": task.priority === "high",
                        })}
                    >
                        {translations.my_tasks_page.priority[task.priority]}
                    </span>

                    {task.due_date && (
                        <span
                            className={clsx(
                                "text-xs px-2 py-1 rounded-md",
                                isOverdue
                                    ? "bg-red-100 text-red-700"
                                    : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                            )}
                        >
                            {translations.my_tasks_page.due}:{" "}
                            {format(new Date(task.due_date), "dd MMM yyyy")}
                        </span>
                    )}
                </div>
            </div>

            <button
                onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    router.patch(
                        route("tasks.complete", task.id),
                        {},
                        {
                            preserveScroll: true,
                            preserveState: true,
                        }
                    );
                }}
                className="shrink-0"
            >
                {task.completed ? (
                    <CheckCircleIcon className="size-6 text-green-500" />
                ) : (
                    <Circle className="size-6 text-gray-500" />
                )}
            </button>
        </Link>
    );
};

export default TaskCard;
