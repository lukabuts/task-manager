import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head, usePage } from "@inertiajs/react";
import {
    DeleteUserForm,
    UpdatePasswordForm,
    UpdateProfileInformationForm,
    ProfilePhoto,
    Settings,
} from "./Partials";
import { useMemo } from "react";

export default function Edit({
    mustVerifyEmail,
    status,
}: PageProps<{ mustVerifyEmail: boolean; status?: string }>) {
    const { translations } = usePage().props;
    const memoedTranslations = useMemo(() => translations, []);
    return (
        <AuthenticatedLayout>
            <Head title={translations.setting_page.title} />

            <div className="mx-auto space-y-6">
                <Settings
                    translations={memoedTranslations}
                    className="div-container p-4"
                />

                <ProfilePhoto
                    translations={memoedTranslations}
                    className="div-container p-4"
                />
                <UpdateProfileInformationForm
                    mustVerifyEmail={mustVerifyEmail}
                    status={status}
                    translations={memoedTranslations}
                    className="div-container p-4"
                />
                <UpdatePasswordForm
                    translations={memoedTranslations}
                    className="div-container p-4"
                />
                <DeleteUserForm
                    translations={memoedTranslations}
                    className="div-container p-4"
                />
            </div>
        </AuthenticatedLayout>
    );
}
