import { FileCheck, FlagIcon, TimerIcon } from "lucide-react";
import { format } from "date-fns";
import InputError from "@/Components/InputError";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";

import { TaskFormCardProps } from "@/types/global";
import { usePage } from "@inertiajs/react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";
import { Textarea } from "@/Components/ui/textarea";

const TaskFormCard = ({
    handleSubmit,
    data,
    setData,
    errors,
    type,
    disabled,
}: TaskFormCardProps) => {
    const { translations } = usePage().props;

    function selectPriority(priority: "low" | "medium" | "high") {
        setData("priority", priority);
    }

    return (
        <form
            onSubmit={(e) => {
                if (disabled) return;
                handleSubmit(e);
            }}
            className="text-gray-900 dark:text-gray-100 text-sm md:text-base w-full div-container sm:p-4"
        >
            <div className="flex gap-4 lg:gap-6 w-full border-b dark:border-gray-700 p-4 ">
                <div>
                    <FileCheck className="size-8" />
                </div>
                <div className="w-full">
                    <Input
                        type="text"
                        placeholder={translations.task_form_page.name_of_task}
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
                            <span>{translations.task_form_page.due_date}</span>
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
                                <span>
                                    {translations.task_form_page.priority}
                                </span>
                            </div>

                            <Select
                                value={data.priority}
                                onValueChange={(e) => {
                                    selectPriority(
                                        e as "low" | "medium" | "high"
                                    );
                                }}
                            >
                                <SelectTrigger
                                    className={`${
                                        data.priority === "low"
                                            ? "bg-green-100 dark:bg-green-900"
                                            : data.priority === "medium"
                                            ? "bg-yellow-100 dark:bg-yellow-900"
                                            : data.priority === "high"
                                            ? "bg-red-100 dark:bg-red-900"
                                            : "dark:bg-gray-900 bg-gray-100"
                                    } w-[180px] dark:border-gray-700`}
                                >
                                    <SelectValue
                                        placeholder={
                                            translations.task_form_page
                                                .select_priority
                                        }
                                    />
                                </SelectTrigger>
                                <SelectContent className="dark:border-gray-700 bg-gray-100 dark:bg-gray-900">
                                    <SelectGroup>
                                        <SelectLabel>
                                            {
                                                translations.task_form_page
                                                    .priorities
                                            }
                                        </SelectLabel>
                                        <SelectItem value="low">
                                            {translations.task_priority.low}
                                        </SelectItem>
                                        <SelectItem value="medium">
                                            {translations.task_priority.medium}
                                        </SelectItem>
                                        <SelectItem value="high">
                                            {translations.task_priority.high}
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <div>
                                <InputError message={errors.priority} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-4  border-b dark:border-gray-700 pt-0 lg:pt-0">
                <label htmlFor="description">
                    {translations.task_form_page.description}
                </label>
                <Textarea
                    id="description"
                    className="dark:bg-gray-900 rounded-lg bg-gray-100 text-gray-900 dark:text-gray-100 mt-4 ld:mt-6 max-h-52 min-h-32 dark:bordzer-gray-700"
                    placeholder={
                        translations.task_form_page.description_of_task
                    }
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
                    {translations.task_form_page.cancel}
                </Button>
                <Button disabled={disabled}>
                    <span className="capitalize">
                        {translations.task_form_page[type]}
                    </span>
                </Button>
            </div>
        </form>
    );
};

export default TaskFormCard;
