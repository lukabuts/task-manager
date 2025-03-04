import PrimaryButton from "@/Components/PrimaryButton";
import { Transition } from "@headlessui/react";
import { usePage } from "@inertiajs/react";

const SubmitFormBtn = ({
    processing,
    recentlySuccessful,
    disabled = false,
}: {
    processing: boolean;
    recentlySuccessful: boolean;
    disabled?: boolean;
}) => {
    const { translations } = usePage().props;

    return (
        <div className="flex items-center gap-4">
            <PrimaryButton disabled={processing || disabled}>
                {translations.save}
            </PrimaryButton>

            <Transition
                show={recentlySuccessful}
                enter="transition ease-in-out"
                enterFrom="opacity-0"
                leave="transition ease-in-out"
                leaveTo="opacity-0"
            >
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    {translations.Saved}.
                </p>
            </Transition>
        </div>
    );
};

export default SubmitFormBtn;
