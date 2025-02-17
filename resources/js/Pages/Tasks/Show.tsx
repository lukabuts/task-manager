import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

function Show() {
    return (
        <AuthenticatedLayout>
            <Head title="My tasks" />
            <div>My tasks</div>
        </AuthenticatedLayout>
    );
}

export default Show;
