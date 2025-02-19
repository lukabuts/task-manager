import DangerButton from "@/Components/DangerButton";
import InputError from "@/Components/InputError";
import Modal from "@/Components/Modal";
import ModalPopup from "@/Components/ModalPopup";
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
            <ModalPopup
                onClick={() => {
                    closeModal();
                    destroy(route("profile.picture"));
                }}
                processing={processing}
                show={confirmingUserDeletion}
                closeModal={closeModal}
            />
        </>
    );
};

export default DeleteProfilePicture;
