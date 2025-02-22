import React from "react";
import Modal from "./Modal";
import SecondaryButton from "./SecondaryButton";
import DangerButton from "./DangerButton";
import { ModalPopupProps } from "@/types/global";
import { usePage } from "@inertiajs/react";

const ModalPopup: React.FC<ModalPopupProps> = ({
    show,
    closeModal,
    onClick,
    processing,
    title,
    description,
}) => {
    const { translations } = usePage().props;
    return (
        <Modal show={show} onClose={closeModal}>
            <div className="p-6">
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                    {title}
                </h2>

                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    {description}
                </p>

                <div className="mt-6 flex justify-end">
                    <SecondaryButton onClick={closeModal}>
                        {translations.task_page.confirm.cancel}
                    </SecondaryButton>

                    <DangerButton
                        onClick={onClick}
                        type="button"
                        className="ms-3"
                        disabled={processing}
                    >
                        {translations.task_page.confirm.delete}
                    </DangerButton>
                </div>
            </div>
        </Modal>
    );
};

export default ModalPopup;
