import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";

export default function Dashboard() {
    const { translations } = usePage().props;

    return (
        <AuthenticatedLayout>
            <Head title={translations.dashboard.title} />
        </AuthenticatedLayout>
    );
}
