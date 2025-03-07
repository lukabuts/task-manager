import { FormEventHandler } from "react";

const FormWrapper = ({
    onSubmit,
    children,
}: {
    onSubmit: FormEventHandler;
    children: React.ReactNode;
}) => {
    return (
        <form onSubmit={onSubmit} className="mt-6 space-y-6 max-w-xl">
            {children}
        </form>
    );
};

export default FormWrapper;
