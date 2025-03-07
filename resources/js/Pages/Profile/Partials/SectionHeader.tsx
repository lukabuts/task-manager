const SectionHeader = ({
    title,
    description,
    children,
}: {
    title: string;
    description: string;
    children?: React.ReactNode;
}) => {
    return (
        <div className="flex items-center justify-between gap-2">
            <div>
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                    {title}
                </h2>

                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    {description}
                </p>
            </div>
            {children}
        </div>
    );
};

export default SectionHeader;
