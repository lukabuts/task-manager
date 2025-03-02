import { FilterDate, Filters, SearchProps } from "@/types/global";
import { router } from "@inertiajs/react";
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
} from "@/Components/ui";

const SearchModal = ({
    hidden,
    filters,
    setFilters,
    calendarRef,
}: SearchProps) => {
    const [date, setDate] = useState<FilterDate | null>({
        from: undefined,
        to: undefined,
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
        if (filters.priorities) {
            urlFilters["priorities"] = filters.priorities;
        }
        if (filters.completed && filters.notCompleted) {
            delete urlFilters["completed"];
            delete urlFilters["notCompleted"];
        }
        if (filters.date?.from || filters.date?.to) {
            urlFilters["to"] = filters.date.to;
            urlFilters["from"] = filters.date.from;
        }
        if (filters.search) {
            urlFilters["search"] = filters.search;
        }

        if (Object.keys(urlFilters).length === 0) return;
        router.get(route("tasks.index"), urlFilters, {
            replace: true,
        });
    }

    return (
        <div
            className={`absolute top-20 shadow-lg left-0 div-container w-full p-4 z-50 ${
                hidden ? "hidden" : ""
            }`}
        >
            <div className="flex flex-col gap-4">
                <p> Filter by:</p>
                <div className="space-y-2 border-b dark:border-b-gray-700 pb-2">
                    <div className="flex items-center gap-4">
                        <p>Completed</p>
                        <Input
                            type="checkbox"
                            className="size-6"
                            onChange={(e) => {
                                setFilters({
                                    ...filters,
                                    completed: filters.completed ? false : true,
                                });
                            }}
                            checked={filters.completed}
                        />
                    </div>
                    <div className="flex items-center gap-4">
                        <p>Not Completed</p>
                        <Input
                            type="checkbox"
                            className="size-6"
                            onChange={(e) => {
                                setFilters({
                                    ...filters,
                                    notCompleted: filters.notCompleted
                                        ? false
                                        : true,
                                });
                            }}
                            checked={filters.notCompleted}
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <p>Upload Date:</p>
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
                                        <span>Pick a date</span>
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
                                    numberOfMonths={2}
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
                <div className="space-y-2">
                    <p>Priority:</p>
                    <div className="flex gap-4">
                        {priorities.map((priority) => (
                            <button
                                key={priority}
                                className={`${
                                    filters.priorities?.find(
                                        (p) => p === priority
                                    )
                                        ? "border dark:border-gray-700"
                                        : ""
                                } ${priority}-priority`}
                                onClick={() => addPriority(priority)}
                            >
                                {priority}
                            </button>
                        ))}
                    </div>
                </div>
                <Button
                    onClick={filterTasks}
                    variant="outline"
                    className="w-fit ml-auto"
                >
                    Filter
                </Button>
            </div>
        </div>
    );
};

export default SearchModal;
