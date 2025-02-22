import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, usePage } from "@inertiajs/react";

export default function Dashboard() {
    const { translations } = usePage().props;
    return (
        <AuthenticatedLayout>
            <Head title={translations.dashboard.title} />
            <h1>{translations.dashboard.title}</h1>
            <Link href={route("locale.update", "ka")}>
                {translations.locales.ka}
            </Link>
            <Link href={route("locale.update", "en")}>
                {translations.locales.en}
            </Link>
        </AuthenticatedLayout>
    );
}
