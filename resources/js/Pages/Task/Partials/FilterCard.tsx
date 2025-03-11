import { router } from "@inertiajs/react";
import FilterWrapper from "./FilterWrapper";
import { FilterCardProps } from "@/types/global";
import { formatDate } from "date-fns";

const FilterCard = ({
    isFilterApplied,
    params,
    updateParams,
    my_tasks_page,
    total,
    task_priority,
}: FilterCardProps) => {
    const shownPriority = (): Array<"low" | "medium" | "high"> => {
        const acceptedPriorities = ["low", "medium", "high"];
        if (!params.priorities) return [];
        return params.priorities.filter((priority) =>
            acceptedPriorities.includes(priority)
        ) as Array<"low" | "medium" | "high">;
    };
    return (
        <div className="flex justify-between items-center mb-4 sm:mb-6 gap-2">
            {isFilterApplied ? (
                <div className="flex gap-2 overflow-x-auto py-1" id="filters">
                    {params.search && (
                        <FilterWrapper
                            onClick={() => {
                                updateParams("search");
                            }}
                            className="max-w-40"
                        >
                            <p className="line-clamp-1 break-all">
                                {params.search}
                            </p>
                        </FilterWrapper>
                    )}
                    {params.completed ? (
                        <FilterWrapper
                            onClick={() => {
                                updateParams("completed");
                            }}
                        >
                            {my_tasks_page.completed}
                        </FilterWrapper>
                    ) : (
                        params.notCompleted && (
                            <FilterWrapper
                                onClick={() => {
                                    updateParams("notCompleted");
                                }}
                            >
                                {my_tasks_page.not_completed}
                            </FilterWrapper>
                        )
                    )}
                    {params.from && (
                        <FilterWrapper
                            onClick={() => {
                                updateParams("from");
                                updateParams("to");
                            }}
                        >
                            {formatDate(params.from, "dd/MM/yyy")} -{" "}
                            {params.to
                                ? formatDate(params.to, "dd/MM/yyy")
                                : my_tasks_page.today}
                        </FilterWrapper>
                    )}

                    {shownPriority().map((priority) => (
                        <FilterWrapper
                            onClick={() => {
                                const newPriorities = Array.isArray(
                                    params.priorities
                                )
                                    ? params.priorities.filter(
                                          (p: string) => p !== priority
                                      )
                                    : [];
                                if (newPriorities.length > 0) {
                                    router.get(
                                        route("tasks.index", {
                                            ...params,
                                            priorities: newPriorities,
                                        })
                                    );
                                } else {
                                    updateParams("priorities");
                                }
                            }}
                            key={priority}
                        >
                            {
                                task_priority[
                                    priority as "low" | "medium" | "high"
                                ]
                            }
                        </FilterWrapper>
                    ))}
                </div>
            ) : (
                <h1 className="title">{my_tasks_page.title}</h1>
            )}
            <span className="dark:text-gray-400 text-gray-600 text-nowrap">
                {my_tasks_page.total}: {total}
            </span>
        </div>
    );
};

export default FilterCard;
