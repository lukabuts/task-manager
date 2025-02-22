import DangerButton from "@/Components/DangerButton";
import ModalPopup from "@/Components/ModalPopup";
import { useForm, usePage } from "@inertiajs/react";
import { useState } from "react";

const DeleteProfilePicture = () => {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const { translations } = usePage().props;
    const { delete: destroy, processing } = useForm();

    function closeModal() {
        setConfirmingUserDeletion(false);
    }

    return (
        <>
            <DangerButton
                onClick={() => setConfirmingUserDeletion(true)}
                type="button"
            >
                {translations.delete}
            </DangerButton>

            <ModalPopup
                onClick={() => {
                    closeModal();
                    destroy(route("profile.picture"));
                }}
                processing={processing}
                show={confirmingUserDeletion}
                closeModal={closeModal}
                title={translations.setting_page.profile_photo.delete.title}
                description={
                    translations.setting_page.profile_photo.delete.description
                }
            />
        </>
    );
};

export default DeleteProfilePicture;
