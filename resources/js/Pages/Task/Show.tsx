import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Task } from "@/types/global";
import { Head, Link, useForm } from "@inertiajs/react";
import { format } from "date-fns";
import { ArrowLeftIcon, EditIcon } from "lucide-react";
import clsx from "clsx";
import DangerButton from "@/Components/DangerButton";
import { useState } from "react";
import ModalPopup from "@/Components/ModalPopup";

const Show = ({ task }: { task: Task }) => {
    const [confirmingTaskDeletion, setConfirmingTaskDeletion] = useState(false);
    const { delete: destroy, processing } = useForm();
    function closeModal() {
        setConfirmingTaskDeletion(false);
    }
    return (
        <AuthenticatedLayout>
            <Head title={task.name} />
            <div className="div-container p-4">
                {/* Back Button */}
                <div className="flex items-center justify-between mb-4">
                    <Link
                        href={route("task.index")}
                        className="flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                        <ArrowLeftIcon className="w-5 h-5 mr-2" />
                        Back to Tasks
                    </Link>

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
                                "bg-green-100 text-green-700":
                                    task.priority === "low",
                                "bg-yellow-100 text-yellow-700":
                                    task.priority === "medium",
                                "bg-red-100 text-red-700":
                                    task.priority === "high",
                            }
                        )}
                    >
                        Priority: {task.priority}
                    </span>

                    {/* Due Date */}
                    {task.due_date && (
                        <div className="text-gray-600 dark:text-gray-300">
                            <strong>Due Date:</strong>{" "}
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
                            ? `Completed on: ${format(
                                  new Date(task.completed_at || ""),
                                  "dd MMM yyyy"
                              )}`
                            : "Not completed"}
                    </div>
                </div>
                <div className="flex justify-end max-sm:mt-4">
                    <div className="flex items-center gap-4">
                        <DangerButton
                            onClick={() => setConfirmingTaskDeletion(true)}
                            type="button"
                        >
                            Delete
                        </DangerButton>
                        <Link
                            href={route("task.edit", task.id)}
                            className="flex items-center bg-yellow-dark hover:bg-yellow-dark/90 text-white px-4 py-1.5 rounded-md"
                        >
                            <EditIcon className="w-5 h-5 mr-2" />
                            Edit
                        </Link>
                    </div>
                </div>
            </div>
            {/* Modal */}
            <ModalPopup
                onClick={() => {
                    closeModal();
                    destroy(route("task.destroy", task.id));
                }}
                processing={processing}
                show={confirmingTaskDeletion}
                closeModal={closeModal}
            />
        </AuthenticatedLayout>
    );
};

export default Show;
