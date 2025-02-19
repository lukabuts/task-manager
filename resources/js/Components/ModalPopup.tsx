import React from "react";
import Modal from "./Modal";
import SecondaryButton from "./SecondaryButton";
import DangerButton from "./DangerButton";
import { ModalPopupProps } from "@/types/global";

const ModalPopup: React.FC<ModalPopupProps> = ({
    show,
    closeModal,
    onClick,
    processing,
}) => {
    return (
        <Modal show={show} onClose={closeModal}>
            <div className="p-6">
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                    Are you sure you want to delete this task?
                </h2>

                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Once your task is deleted, it cannot be recovered.
                </p>

                <div className="mt-6 flex justify-end">
                    <SecondaryButton onClick={closeModal}>
                        Cancel
                    </SecondaryButton>

                    <DangerButton
                        onClick={onClick}
                        type="button"
                        className="ms-3"
                        disabled={processing}
                    >
                        Delete
                    </DangerButton>
                </div>
            </div>
        </Modal>
    );
};

export default ModalPopup;
