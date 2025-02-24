import DangerButton from "@/Components/DangerButton";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import { FormEventHandler, memo, useRef, useState } from "react";
import SectionHeader from "./SectionHeader";
import { ProfilePartialProps } from "@/types/global";

const DeleteUserForm = ({
    className = "",
    translations,
}: ProfilePartialProps) => {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef<HTMLInputElement>(null);
    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
        clearErrors,
    } = useForm({
        password: "",
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser: FormEventHandler = (e) => {
        e.preventDefault();

        destroy(route("profile.destroy"), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current?.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        clearErrors();
        reset();
    };

    return (
        <section className={`space-y-6 ${className}`}>
            <SectionHeader
                title={translations.setting_page.delete_account.title}
                description={
                    translations.setting_page.delete_account.description
                }
            />

            <DangerButton onClick={confirmUserDeletion}>
                {translations.setting_page.delete_account.delete}
            </DangerButton>

            <Modal show={confirmingUserDeletion} onClose={closeModal}>
                <form onSubmit={deleteUser} className="p-6">
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                        {translations.setting_page.delete_account.confirm.title}
                    </h2>

                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        {
                            translations.setting_page.delete_account.confirm
                                .description
                        }
                    </p>

                    <div className="mt-6">
                        <InputLabel
                            htmlFor="password"
                            value="Password"
                            className="sr-only"
                        />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            ref={passwordInput}
                            value={data.password}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            className="mt-1 block sm:w-3/4 w-full"
                            isFocused
                            placeholder={
                                translations.setting_page.delete_account.confirm
                                    .password
                            }
                        />

                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>
                            {
                                translations.setting_page.delete_account.confirm
                                    .cancel
                            }
                        </SecondaryButton>

                        <DangerButton className="ms-3" disabled={processing}>
                            {
                                translations.setting_page.delete_account.confirm
                                    .delete
                            }
                        </DangerButton>
                    </div>
                </form>
            </Modal>
        </section>
    );
};

export default memo(DeleteUserForm);
