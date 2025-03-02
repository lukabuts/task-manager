import { Task } from "@/types/global";
import { Head, useForm } from "@inertiajs/react";
import TaskFormCard from "@/Components/TaskFormCard";
import { useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const Edit = ({ task }: { task: Task }) => {
    const {
        data,
        setData,
        errors,
        patch,
        reset,
        processing,
        recentlySuccessful,
    } = useForm({
        name: task.name,
        description: task.description,
        due_date: task.due_date,
        priority: task.priority,
    });

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        patch(route("tasks.update", task.id), {
            onSuccess: () => {
                reset();
            },
        });
    }

    return (
        <AuthenticatedLayout>
            <Head title={"Edit task - " + task.name} />
            <TaskFormCard
                handleSubmit={handleSubmit}
                data={data}
                setData={setData}
                errors={errors}
                processing={processing}
                type="edit"
                disabled={
                    processing ||
                    (data.description === task.description &&
                        data.due_date === task.due_date &&
                        data.name === task.name &&
                        data.priority === task.priority) ||
                    data.description.trim() === "" ||
                    data.due_date.trim() === "" ||
                    data.name.trim() === ""
                }
            />
        </AuthenticatedLayout>
    );
};

export default Edit;
