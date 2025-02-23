import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Task } from "@/types/global";
import { Head, useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";
import TaskFormCard from "@/Components/TaskFormCard";

const Edit = ({ task }: { task: Task }) => {
    const { data, setData, errors, post, reset, processing } = useForm({
        name: "",
        description: "",
        due_date: "",
        priority: "",
    });

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post(route("task.store"), {
            onSuccess: () => {
                reset();
            },
        });
    }

    return (
        <AuthenticatedLayout>
            <Head title={"Add Task "} />
            <TaskFormCard
                handleSubmit={handleSubmit}
                data={data}
                setData={setData}
                errors={errors}
                processing={processing}
                type="create"
                disabled={
                    processing ||
                    data.description.trim() === "" ||
                    data.due_date.trim() === "" ||
                    data.name.trim() === "" ||
                    data.priority.trim() === ""
                }
            />
        </AuthenticatedLayout>
    );
};

export default Edit;
