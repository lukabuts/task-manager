import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { Link, useForm, usePage } from "@inertiajs/react";
import { FormEventHandler, memo, useState } from "react";
import { ProfilePartialProps } from "@/types/global";
import { EditIcon } from "lucide-react";
import { SectionHeader, FormWrapper, SubmitFormBtn } from "./";

const UpdateProfileInformation = ({
    status,
    className = "",
    translations,
}: ProfilePartialProps & {
    mustVerifyEmail: boolean;
    status?: string;
}) => {
    const user = usePage().props.auth.user;
    const [editing, setEditing] = useState(false);

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            email: user.email,
        });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        patch(route("profile.update"));
    };

    return (
        <section className={className}>
            <SectionHeader
                title={translations.setting_page.profile_information.title}
                description={
                    translations.setting_page.profile_information.description
                }
            >
                <button onClick={() => setEditing(true)}>
                    <EditIcon />
                </button>
            </SectionHeader>

            <FormWrapper onSubmit={submit}>
                <div>
                    <InputLabel
                        htmlFor="name"
                        value={
                            translations.setting_page.profile_information.name
                        }
                    />

                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                        autoComplete="name"
                        spellCheck="false"
                        disabled={!editing || processing}
                        isFocused={editing}
                    />

                    <InputError className="mt-2" message={errors.name} />
                </div>

                <div>
                    <InputLabel
                        htmlFor="email"
                        value={
                            translations.setting_page.profile_information.name
                        }
                    />

                    <TextInput
                        id="email"
                        type="email"
                        className="mt-1 block w-full"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        required
                        autoComplete="email"
                        spellCheck="false"
                        disabled={!editing || processing}
                    />

                    <InputError className="mt-2" message={errors.email} />
                </div>

                {user.email_verified_at === null && (
                    <div>
                        <p className="mt-2 text-sm text-gray-800 dark:text-gray-200">
                            Your email address is unverified.{" "}
                            <Link
                                href={route("verification.send")}
                                method="post"
                                as="button"
                                className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800"
                            >
                                Click here to re-send the verification email.
                            </Link>
                        </p>

                        {status === "verification-link-sent" && (
                            <div className="mt-2 text-sm font-medium text-green-600 dark:text-green-400">
                                A new verification link has been sent to your
                                email address.
                            </div>
                        )}
                    </div>
                )}

                <SubmitFormBtn
                    disabled={
                        data.email.trim() === "" ||
                        data.name.trim() === "" ||
                        (user.email === data.email.trim() &&
                            user.name === data.name.trim()) ||
                        processing
                    }
                    recentlySuccessful={recentlySuccessful}
                />
            </FormWrapper>
        </section>
    );
};
export default memo(UpdateProfileInformation);
