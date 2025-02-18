import DangerButton from "@/Components/DangerButton";
import InputError from "@/Components/InputError";
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import { useForm } from "@inertiajs/react";
import { useState } from "react";

const DeleteProfilePicture = () => {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);

    const {
        delete: destroy,
        processing,
        errors,
        recentlySuccessful,
    } = useForm();

    function closeModal() {
        setConfirmingUserDeletion(false);
    }

    return (
        <>
            <DangerButton
                onClick={() => setConfirmingUserDeletion(true)}
                type="button"
            >
                Delete
            </DangerButton>
            {errors && <InputError>Someting went wrong</InputError>}
            {recentlySuccessful && <span>Deleted</span>}
            <Modal show={confirmingUserDeletion} onClose={closeModal}>
                <div className="p-6">
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                        Are you sure you want to delete your profile picture?
                    </h2>

                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        Once your profile picture is deleted, it cannot be
                        recovered.
                    </p>

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>
                            Cancel
                        </SecondaryButton>

                        <DangerButton
                            onClick={() => {
                                closeModal();
                                destroy(route("profile.picture"));
                            }}
                            type="button"
                            className="ms-3"
                            disabled={processing}
                        >
                            Delete
                        </DangerButton>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default DeleteProfilePicture;
