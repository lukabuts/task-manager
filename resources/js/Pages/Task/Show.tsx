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
    function closeModal() {
        setConfirmingTaskDeletion(false);
    }
    return (
        <AuthenticatedLayout>
            <Head title={task.name} />
            <div className="div-container p-4 break-all">
                {/* Back Button */}
                <div className="flex items-center justify-between mb-4">
                    <button
                        onClick={() => window.history.back()}
                        className="flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                        <ArrowLeftIcon className="w-5 h-5 mr-2" />
                        {translations.task_page.back_to_tasks}
                    </button>

                    {/* Edit Button */}
                </div>

                {/* Task Name */}
                <h1 className="title">{task.name}</h1>

                {/* Task Description */}
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                    {task.description || "No description available"}
                </p>

                {/* Task Info */}
                <div className="mt-4 space-y-2 text-sm">
                    {/* Priority Badge */}
                    <span
                        className={clsx(
                            "inline-block px-3 py-1 rounded-md font-medium",
                            {
                                "low-priority": task.priority === "low",
                                "medium-priority": task.priority === "medium",
                                "high-priority": task.priority === "high",
                            }
                        )}
                    >
                        {translations.task_page.priority}:{" "}
                        {translations.task_priority[task.priority]}
                    </span>

                    {/* Due Date */}
                    {task.due_date && (
                        <div className="text-gray-600 dark:text-gray-300">
                            <strong>{translations.task_page.due_date}:</strong>{" "}
                            {format(new Date(task.due_date), "dd MMM yyyy")}
                        </div>
                    )}

                    {/* Completion Status */}
                    <div
                        className={clsx("text-sm font-semibold", {
                            "text-green-600": task.completed,
                            "text-gray-500": !task.completed,
                        })}
                    >
                        {task.completed
                            ? `${
                                  translations.task_page.completed.completed
                              }: ${format(
                                  new Date(task.completed_at || ""),
                                  "dd MMM yyyy"
                              )}`
                            : `${translations.task_page.completed.not}`}
                    </div>
                </div>
                <div className="flex justify-end max-sm:mt-4">
                    <div className="flex items-center gap-4">
                        <DangerButton
                            onClick={() => setConfirmingTaskDeletion(true)}
                            type="button"
                        >
                            {translations.task_page.delete}
                        </DangerButton>
                        <Link
                            href={route("tasks.edit", task.id)}
                            className="flex items-center bg-yellow-dark hover:bg-yellow-dark/90 text-white px-4 py-1.5 rounded-md"
                        >
                            <EditIcon className="w-5 h-5 mr-2" />
                            {translations.task_page.edit}
                        </Link>
                    </div>
                </div>
            </div>
            {/* Modal */}
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
