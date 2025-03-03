import { XIcon } from "lucide-react";
import { ReactNode } from "react";

const FilterWrapper = ({
    className,
    children,
    onClick,
}: {
    className?: string;
    children: ReactNode;
    onClick?: () => void;
}) => {
    return (
        <div className="div-container px-2 py-1 w-fit text-nowrap flex items-center gap-1">
            <div className={className}>{children}</div>
            <button onClick={onClick}>
                <XIcon className="size-5" />
            </button>
        </div>
    );
};

export default FilterWrapper;
