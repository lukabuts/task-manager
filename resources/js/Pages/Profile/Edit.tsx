import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head, usePage } from "@inertiajs/react";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import ProfilePhoto from "./Partials/ProfilePhoto";
import Settings from "./Partials/Settings";

export default function Edit({
    mustVerifyEmail,
    status,
}: PageProps<{ mustVerifyEmail: boolean; status?: string }>) {
    const { translations } = usePage().props;
    return (
        <AuthenticatedLayout>
            <Head title={translations.setting_page.title} />

            <div className="mx-auto space-y-6 ">
                <div className="div-container p-4">
                    <Settings
                        className="max-w-xl"
                        translations={translations}
                    />
                </div>
                <div className="div-container p-4">
                    <ProfilePhoto
                        className="max-w-xl"
                        translations={translations}
                    />
                </div>
                <div className="div-container p-4">
                    <UpdateProfileInformationForm
                        mustVerifyEmail={mustVerifyEmail}
                        status={status}
                        className="max-w-xl"
                        translations={translations}
                    />
                </div>

                <div className="div-container p-4">
                    <UpdatePasswordForm
                        className="max-w-xl"
                        translations={translations}
                    />
                </div>

                <div className="div-container p-4">
                    <DeleteUserForm
                        className="max-w-xl"
                        translations={translations}
                    />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
