const SectionHeader = ({
    title,
    description,
}: {
    title: string;
    description: string;
}) => {
    return (
        <div>
            <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                {title}
            </h2>

            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                {description}
            </p>
        </div>
    );
};

export default SectionHeader;
