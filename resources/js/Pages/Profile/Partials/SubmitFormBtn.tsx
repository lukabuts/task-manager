import PrimaryButton from "@/Components/PrimaryButton";
import { Transition } from "@headlessui/react";
import { usePage } from "@inertiajs/react";

const SubmitFormBtn = ({
    recentlySuccessful,
    disabled = false,
}: {
    recentlySuccessful: boolean;
    disabled?: boolean;
}) => {
    const { translations } = usePage().props;

    return (
        <div className="flex items-center gap-4">
            <PrimaryButton disabled={disabled}>
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
