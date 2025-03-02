import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { TaskFormCard } from "./Partials";

const Edit = () => {
    const { data, setData, errors, post, reset, processing } = useForm({
        name: "",
        description: "",
        due_date: "",
        priority: "",
    });

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post(route("tasks.store"), {
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
