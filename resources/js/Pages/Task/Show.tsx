import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Task } from "@/types/global";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import { format } from "date-fns";
import { ArrowLeftIcon, EditIcon } from "lucide-react";
import clsx from "clsx";
import DangerButton from "@/Components/DangerButton";
import { useState } from "react";
import ModalPopup from "@/Components/ModalPopup";

const Show = ({ task }: { task: Task }) => {
    const [confirmingTaskDeletion, setConfirmingTaskDeletion] = useState(false);
    const { translations } = usePage().props;
    const { delete: destroy, processing } = useForm();

    const closeModal = () => setConfirmingTaskDeletion(false);

    return (
        <AuthenticatedLayout>
            <Head title={task.name} />

            <div className="div-container p-4 md:p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-2">
                    <Link
                        href={route("tasks.index")}
                        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm transition"
                    >
                        <ArrowLeftIcon className="w-5 h-5" />
                        {translations.task_page.back_to_tasks}
                    </Link>
                </div>

                {/* Task Name */}
                <h1 className="title break-words">{task.name}</h1>

                {/* Task Description */}
                <div
                    className="task-description-container mt-2"
                    dangerouslySetInnerHTML={{ __html: task.description }}
                />

                {/* Task Meta Info */}
                <div className="space-y-3 py-2">
                    {/* Priority */}
                    <div>
                        <span className="text-gray-500 dark:text-gray-400">
                            {translations.task_page.priority}:
                        </span>{" "}
                        <span
                            className={clsx(
                                "inline-block px-2 py-0.5 rounded-md font-medium text-sm capitalize",
                                {
                                    "bg-green-100 text-green-700":
                                        task.priority === "low",
                                    "bg-yellow-100 text-yellow-700":
                                        task.priority === "medium",
                                    "bg-red-100 text-red-700":
                                        task.priority === "high",
                                }
                            )}
                        >
                            {translations.task_priority[task.priority]}
                        </span>
                    </div>

                    {/* Due Date */}
                    {task.due_date && (
                        <div>
                            <span className="text-gray-500 dark:text-gray-400">
                                {translations.task_page.due_date}:
                            </span>{" "}
                            <span className="font-medium">
                                {format(new Date(task.due_date), "dd MMM yyyy")}
                            </span>
                        </div>
                    )}

                    {/* Completion Status */}
                    <div>
                        <span
                            className={clsx("font-medium", {
                                "text-green-600": task.completed,
                                "text-gray-500": !task.completed,
                            })}
                        >
                            {task.completed && task.completed_at
                                ? `${
                                      translations.task_page.completed.completed
                                  } (${format(
                                      new Date(task.completed_at),
                                      "dd MMM yyyy"
                                  )})`
                                : translations.task_page.completed.not}
                        </span>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex justify-end gap-4 pt-4 md:pt-5 border-t container-border">
                    <Link
                        href={route("tasks.edit", task.id)}
                        className="flex items-center gap-2 bg-yellow-dark hover:bg-yellow-dark/90 text-white px-3 py-1.5 rounded-md transition"
                    >
                        <EditIcon className="w-5 h-5" />
                        {translations.task_page.edit}
                    </Link>
                    <DangerButton
                        onClick={() => setConfirmingTaskDeletion(true)}
                        type="button"
                        className="bg-red-600 hover:bg-red-700 text-white"
                    >
                        {translations.task_page.delete}
                    </DangerButton>
                </div>
            </div>

            {/* Confirm Deletion Modal */}
            <ModalPopup
                onClick={() => {
                    closeModal();
                    destroy(route("tasks.destroy", task.id));
                }}
                processing={processing}
                show={confirmingTaskDeletion}
                closeModal={closeModal}
                title={translations.task_page.confirm.title}
                description={translations.task_page.confirm.description}
            />
        </AuthenticatedLayout>
    );
};

export default Show;
