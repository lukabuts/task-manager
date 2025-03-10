import { FilterDate, Filters, SearchProps } from "@/types/global";
import { router, usePage } from "@inertiajs/react";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { format, formatDate } from "date-fns";
import { useEffect, useState } from "react";
import {
    Calendar,
    Popover,
    PopoverContent,
    PopoverTrigger,
    Button,
    Input,
    Checkbox,
} from "@/Components/ui";

const SearchModal = ({
    hidden,
    filters,
    setFilters,
    calendarRef,
}: SearchProps) => {
    const { translations } = usePage().props;
    const [show, setShow] = useState(false);
    const [date, setDate] = useState<FilterDate | null>(() => {
        const dt: FilterDate = {
            from: undefined,
            to: undefined,
        };

        filters.date?.from && (dt.from = new Date(filters.date.from));
        filters.date?.to && (dt.to = new Date(filters.date.to));
        return dt;
    });

    const priorities: Array<"low" | "medium" | "high"> = [
        "low",
        "medium",
        "high",
    ];

    function addPriority(priority: "low" | "medium" | "high") {
        const priorities = filters.priorities || [];
        priorities.find((p) => p === priority)
            ? (priorities[priorities.indexOf(priority)] = "")
            : priorities.push(priority);
        setFilters({ ...filters, priorities });
    }

    useEffect(() => {
        setFilters({
            ...filters,
            date: {
                from: date?.from ? formatDate(date?.from, "yyyy-MM-dd") : "",
                to: date?.to ? formatDate(date?.to, "yyyy-MM-dd") : "",
            },
        });
    }, [date]);

    function filterTasks() {
        const urlFilters: any = {};
        if (filters.completed) {
            urlFilters["completed"] = filters.completed;
        }
        if (filters.notCompleted) {
            urlFilters["notCompleted"] = filters.notCompleted;
        }
        if ((filters.priorities || []).length > 0) {
            const priorities = (filters.priorities || []).filter((p) =>
                ["high", "medium", "low"].includes(p)
            );
            if (priorities.length > 0) {
                urlFilters["priorities"] = priorities;
            }
        }
        if (filters.completed && filters.notCompleted) {
            delete urlFilters["completed"];
            delete urlFilters["notCompleted"];
        }
        if (filters.date?.from) {
            urlFilters["from"] = filters.date.from;
        }
        if (filters.date?.to) {
            urlFilters["to"] = filters.date.to;
        }
        if (filters.search) {
            urlFilters["search"] = filters.search;
        }

        if (Object.keys(urlFilters).length === 0) return;
        router.get(route("tasks.index"), urlFilters, {
            replace: true,
        });
    }

    useEffect(() => {
        setTimeout(() => {
            setShow(() => {
                if (hidden) return false;
                return true;
            });
        }, 150);
    }, [hidden]);

    return (
        <div
            className={`absolute top-20 shadow-lg left-0 div-container w-full p-4 z-50 text-sm ${
                hidden ? "animate-in" : ""
            } ${!show ? "hidden" : ""}`}
        >
            <div className="flex flex-col gap-4">
                <p>{translations.layout.search_modal.filter_by}:</p>
                <div className="space-y-2 container-border pb-2">
                    <div className="flex items-center gap-4">
                        <p>{translations.layout.search_modal.completed}</p>
                        <Checkbox
                            onCheckedChange={() => {
                                setFilters({
                                    ...filters,
                                    completed: filters.completed ? false : true,
                                });
                            }}
                            checked={filters.completed}
                        />
                    </div>
                    <div className="flex items-center gap-4">
                        <p>{translations.layout.search_modal.not_completed}</p>
                        <Checkbox
                            checked={filters.notCompleted}
                            onCheckedChange={() => {
                                setFilters({
                                    ...filters,
                                    notCompleted: filters.notCompleted
                                        ? false
                                        : true,
                                });
                            }}
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <p>{translations.layout.search_modal.upload_date}:</p>
                    <div className="grid gap-2">
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    id="date"
                                    variant={"outline"}
                                    className={cn(
                                        "w-[300px] justify-start text-left font-normal",
                                        !date && "text-muted-foreground"
                                    )}
                                >
                                    <CalendarIcon />
                                    {date?.from ? (
                                        date.to ? (
                                            <>
                                                {format(date.from, "LLL dd, y")}{" "}
                                                - {format(date.to, "LLL dd, y")}
                                            </>
                                        ) : (
                                            format(date.from, "LLL dd, y")
                                        )
                                    ) : (
                                        <span>
                                            {
                                                translations.layout.search_modal
                                                    .pick_a_date
                                            }
                                        </span>
                                    )}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent
                                ref={calendarRef}
                                className="w-auto p-0"
                                align="start"
                            >
                                <Calendar
                                    initialFocus
                                    mode="range"
                                    defaultMonth={date?.from}
                                    selected={
                                        date || {
                                            from: undefined,
                                            to: undefined,
                                        }
                                    }
                                    onSelect={(range) =>
                                        setDate(
                                            range
                                                ? {
                                                      from: range.from,
                                                      to: range.to,
                                                  }
                                                : {
                                                      from: undefined,
                                                      to: undefined,
                                                  }
                                        )
                                    }
                                    toDate={new Date()}
                                    numberOfMonths={1}
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
                <div className="space-y-2">
                    <p>{translations.layout.search_modal.priority}:</p>
                    <div className="flex gap-3">
                        {priorities.map((priority) => (
                            <button
                                key={priority}
                                className={`${
                                    filters.priorities?.find(
                                        (p) => p === priority
                                    )
                                        ? "opacity-100"
                                        : "opacity-60"
                                } ${priority}-priority `}
                                onClick={() => addPriority(priority)}
                            >
                                {translations.task_priority[priority]}
                            </button>
                        ))}
                    </div>
                </div>
                <Button
                    onClick={filterTasks}
                    variant="outline"
                    className="w-fit ml-auto"
                >
                    {translations.layout.search_modal.filter}
                </Button>
            </div>
        </div>
    );
};

export default SearchModal;
