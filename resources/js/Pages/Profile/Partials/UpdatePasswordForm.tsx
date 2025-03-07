import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import { FormEventHandler, memo, useRef, useState } from "react";
import { ProfilePartialProps } from "@/types/global";
import { SectionHeader, FormWrapper, SubmitFormBtn } from "./";
import { EditIcon } from "lucide-react";

const UpdatePasswordForm = ({
    className = "",
    translations,
}: ProfilePartialProps) => {
    const [editing, setEditing] = useState(false);
    const passwordInput = useRef<HTMLInputElement>(null);
    const currentPasswordInput = useRef<HTMLInputElement>(null);
    const {
        data,
        setData,
        errors,
        put,
        reset,
        processing,
        recentlySuccessful,
    } = useForm({
        current_password: "",
        password: "",
        password_confirmation: "",
    });

    const updatePassword: FormEventHandler = (e) => {
        e.preventDefault();

        put(route("password.update"), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset("password", "password_confirmation");
                    passwordInput.current?.focus();
                }

                if (errors.current_password) {
                    reset("current_password");
                    currentPasswordInput.current?.focus();
                }
            },
        });
    };

    return (
        <section className={className}>
            <SectionHeader
                title={translations.setting_page.update_password.title}
                description={
                    translations.setting_page.update_password.description
                }
            >
                <button onClick={() => setEditing(true)}>
                    <EditIcon />
                </button>
            </SectionHeader>
            <FormWrapper onSubmit={updatePassword}>
                <div>
                    <InputLabel
                        htmlFor="current_password"
                        value={
                            translations.setting_page.update_password
                                .current_password
                        }
                    />

                    <TextInput
                        id="current_password"
                        ref={currentPasswordInput}
                        value={data.current_password}
                        onChange={(e) =>
                            setData("current_password", e.target.value)
                        }
                        type="password"
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        disabled={!editing}
                        isFocused={editing}
                    />

                    <InputError
                        message={errors.current_password}
                        className="mt-2"
                    />
                </div>

                <div>
                    <InputLabel
                        htmlFor="password"
                        value={
                            translations.setting_page.update_password
                                .new_password
                        }
                    />

                    <TextInput
                        id="password"
                        ref={passwordInput}
                        value={data.password}
                        onChange={(e) => setData("password", e.target.value)}
                        type="password"
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        disabled={!editing || processing}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div>
                    <InputLabel
                        htmlFor="password_confirmation"
                        value={
                            translations.setting_page.update_password
                                .confirm_password
                        }
                    />

                    <TextInput
                        id="password_confirmation"
                        value={data.password_confirmation}
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
                        type="password"
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        disabled={!editing || processing}
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>

                <SubmitFormBtn
                    disabled={
                        data.current_password === "" ||
                        data.password === "" ||
                        data.password_confirmation === "" ||
                        processing
                    }
                    recentlySuccessful={recentlySuccessful}
                />
            </FormWrapper>
        </section>
    );
};
export default memo(UpdatePasswordForm);
