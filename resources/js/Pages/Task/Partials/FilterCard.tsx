import { router } from "@inertiajs/react";
import FilterWrapper from "./FilterWrapper";
import { FilterCardProps } from "@/types/global";

const FilterCard = ({
    isFilterApplied,
    params,
    updateParams,
    my_tasks_page,
    total,
}: FilterCardProps) => {
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
                            Completed
                        </FilterWrapper>
                    ) : (
                        params.notCompleted && (
                            <FilterWrapper
                                onClick={() => {
                                    updateParams("notCompleted");
                                }}
                            >
                                Not Completed
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
                            {params.from.split("-").join("/")} -{" "}
                            {params.to
                                ? params.to.split("-").join("/")
                                : "Today"}
                        </FilterWrapper>
                    )}

                    {params.priorities &&
                        Array.isArray(params.priorities) &&
                        params.priorities.map((priority) => (
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
                                {priority}
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
