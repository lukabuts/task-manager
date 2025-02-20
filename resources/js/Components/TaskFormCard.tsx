import { FlagIcon, PlusIcon, TimerIcon } from "lucide-react";
import { format, isBefore, set } from "date-fns";
import InputError from "@/Components/InputError";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import CheckedFileIcon from "@/Icons/CheckedFileIcon";

import { useEffect, useState } from "react";
import { TaskFormCardProps } from "@/types/global";

const TaskFormCard = ({
    handleSubmit,
    data,
    setData,
    errors,
    type,
    disabled,
}: TaskFormCardProps) => {
    const priorityDivClass =
        "flex items-center gap-2 lg:px-4 lg:py-2 py-1 px-2 rounded-lg max-lg:text-sm font-medium transition-colors w-fit";
    const [selectedPriority, setSelectedPriority] = useState<
        "low" | "medium" | "high"
    >("low");
    const [showSelectPriority, setShowSelectPriority] = useState(false);

    useEffect(() => {
        setData("priority", selectedPriority);
    }, [selectedPriority]);

    return (
        <form
            onSubmit={(e) => {
                if (disabled) return;
                handleSubmit(e);
            }}
            className="text-gray-900 dark:text-gray-100 text-s w-full div-container sm:p-4"
        >
            <div className="flex gap-4 lg:gap-6 w-full border-b p-4 ">
                <div>
                    <CheckedFileIcon className="size-8" />
                </div>
                <div className="w-full">
                    <Input
                        type="text"
                        placeholder="Name of task"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                    />
                    <InputError message={errors.name} className="mt-2" />
                </div>
            </div>
            <div className="space-y-4 w-full p-4">
                <div className="space-y-1">
                    <div className="flex items-center gap-10">
                        <div className="flex items-center gap-2 h-10">
                            <TimerIcon className="size-5" />
                            <span>Due Date</span>
                        </div>
                        <div
                            className={`flex items-center gap-2 text-nowrap rounded-lg font-medium transition-colors h-10 
                                ${
                                    data.due_date &&
                                    data.due_date <
                                        format(new Date(), "yyyy-MM-dd")
                                        ? "text-red-600 dark:text-red-400"
                                        : "dark:hover:text-white/60 hover:text-black/60"
                                }`}
                        >
                            <Input
                                type="date"
                                className="w-fit"
                                value={data.due_date?.split(" ")[0] || ""}
                                onChange={(e) => {
                                    setData("due_date", e.target.value);
                                }}
                            />
                        </div>
                    </div>
                    <div>
                        <InputError message={errors.due_date} />
                    </div>
                </div>
                <div className="space-y-1">
                    <div className="space-y-1">
                        <div className="flex items-center gap-10">
                            <div className="flex items-center gap-2 h-10">
                                <FlagIcon className="size-5" />
                                <span>Priority</span>
                            </div>
                            <div
                                className={`flex items-center gap-2 rounded-lg font-medium transition-colors w-fit h-10 cursor-pointer`}
                            >
                                <div className="flex items-center gap-2">
                                    <div
                                        className={`${
                                            data.priority === "low" ||
                                            showSelectPriority
                                                ? ""
                                                : "hidden"
                                        } bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-800 ${priorityDivClass}`}
                                        onClick={() => {
                                            setSelectedPriority("low");
                                            setShowSelectPriority(
                                                (prev) => !prev
                                            );
                                        }}
                                    >
                                        Low
                                    </div>
                                    <div
                                        className={`${
                                            data.priority === "medium" ||
                                            showSelectPriority
                                                ? ""
                                                : "hidden"
                                        } bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300 hover:bg-yellow-200 dark:hover:bg-yellow-800 ${priorityDivClass}`}
                                        onClick={() => {
                                            setSelectedPriority("medium");
                                            setShowSelectPriority(
                                                (prev) => !prev
                                            );
                                        }}
                                    >
                                        Medium
                                    </div>
                                    <div
                                        className={`${
                                            data.priority === "high" ||
                                            showSelectPriority
                                                ? ""
                                                : "hidden"
                                        } bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-800 ${priorityDivClass}`}
                                        onClick={() => {
                                            setSelectedPriority("high");
                                            setShowSelectPriority(
                                                (prev) => !prev
                                            );
                                        }}
                                    >
                                        High
                                    </div>
                                </div>
                            </div>
                            <div>
                                <InputError message={errors.priority} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-4  border-b pt-0 lg:pt-0">
                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    className="dark:bg-gray-900 shadow rounded-lg bg-gray-100 outline-none focus:outline-none w-full text-gray-900 dark:text-gray-100 mt-4 ld:mt-6 max-h-40 min-h-32 border border-input"
                    placeholder="Description of task"
                    onChange={(e) => setData("description", e.target.value)}
                    value={data.description || ""}
                />
                <InputError message={errors.description} />
            </div>
            <div className="p-4 flex justify-end gap-4">
                <Button
                    onClick={() => {
                        window.history.back();
                    }}
                    variant="outline"
                    type="button"
                >
                    Cancel
                </Button>
                <Button disabled={disabled}>
                    <span className="capitalize">{type} task</span>
                </Button>
            </div>
        </form>
    );
};

export default TaskFormCard;
