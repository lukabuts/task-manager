import { FileCheck, FlagIcon, TimerIcon } from "lucide-react";
import { format } from "date-fns";
import InputError from "@/Components/InputError";
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
    Button,
    Input,
} from "@/Components/ui";
import { memo, useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Toolbar } from "./";

const TaskFormCard = ({
    handleSubmit,
    data,
    setData,
    errors,
    type,
    disabled,
}: TaskFormCardProps) => {
    useEffect(() => {
        console.log(data);
    }, [data]);
    const { translations } = usePage().props;

    function selectPriority(priority: "low" | "medium" | "high") {
        setData("priority", priority);
    }

    // Setup Tiptap Editor
    const editor = useEditor({
        extensions: [StarterKit],
        content: data.description || "",
        onUpdate({ editor }: { editor: any }) {
            setData("description", editor.getHTML());
        },
        editorProps: {
            attributes: {
                class: "sm:h-72 h-56 w-full p-3 text-gray-900 dark:text-gray-100 overflow-auto focus:outline-none",
            },
        },
    });

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                if (disabled) return;
                handleSubmit(e);
            }}
            className="text-gray-900 dark:text-gray-100 text-sm md:text-base w-full div-container sm:p-4"
        >
            <div className="flex items-center gap-4 lg:gap-6 w-full border-b container-border p-4 ">
                <div>
                    <FileCheck className="sm:size-8 size-6" />
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
                {/* Due Date */}
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
                                className="min-w-36"
                                value={data.due_date?.split("T")[0] || ""}
                                onChange={(e) => {
                                    setData("due_date", e.target.value);
                                }}
                            />
                        </div>
                    </div>
                    <InputError message={errors.due_date} />
                </div>

                {/* Priority */}
                <div className="space-y-1">
                    <div className="flex items-center gap-10">
                        <div className="flex items-center gap-2 h-10">
                            <FlagIcon className="size-5" />
                            <span>{translations.task_form_page.priority}</span>
                        </div>

                        <Select
                            value={data.priority}
                            onValueChange={(e) =>
                                selectPriority(e as "low" | "medium" | "high")
                            }
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
                                } w-[180px] container-border `}
                            >
                                <SelectValue
                                    placeholder={
                                        translations.task_form_page
                                            .select_priority
                                    }
                                />
                            </SelectTrigger>
                            <SelectContent className="container-border bg-gray-100 dark:bg-gray-900">
                                <SelectGroup>
                                    <SelectLabel>
                                        {translations.task_form_page.priorities}
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
                        <InputError message={errors.priority} />
                    </div>
                </div>
            </div>

            {/* Description (Tiptap) */}
            <div className="p-4 border-b container-border pt-0 space-y-2 mb-2">
                <label htmlFor="description">
                    {translations.task_form_page.description}
                </label>

                <div className="dark:bg-gray-900 bg-gray-100 rounded-md border container-border">
                    {/* 🆕 Add toolbar above the editor */}
                    <Toolbar editor={editor} />

                    <EditorContent
                        editor={editor}
                        className="task-description-container"
                    />

                    <InputError message={errors.description} className="p-2" />
                </div>
            </div>

            {/* Buttons */}
            <div className="p-4 flex justify-end gap-4">
                <Button
                    onClick={() => window.history.back()}
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

export default memo(TaskFormCard);
