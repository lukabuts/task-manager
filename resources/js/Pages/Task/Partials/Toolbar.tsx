import {
    BoldIcon,
    Heading1Icon,
    Heading2Icon,
    ItalicIcon,
    ListIcon,
    ListOrderedIcon,
} from "lucide-react";

const Toolbar = ({ editor }: { editor: any }) => {
    if (!editor) return null;

    return (
        <div className="flex gap-2 flex-wrap p-2 border-b container-border">
            <button
                type="button"
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 1 }).run()
                }
                className={`px-1 py-0.5 rounded ${
                    editor.isActive("heading", { level: 1 })
                        ? "bg-yellow-dark text-white"
                        : "bg-gray-200 dark:bg-gray-700"
                }`}
            >
                <Heading1Icon className="size-5" />
            </button>
            <button
                type="button"
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 2 }).run()
                }
                className={`px-1 py-0.5 rounded ${
                    editor.isActive("heading", { level: 2 })
                        ? " bg-yellow-dark text-white"
                        : "bg-gray-200 dark:bg-gray-700"
                }`}
            >
                <Heading2Icon className="size-5" />
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleBold().run()}
                className={`px-1 py-0.5 rounded ${
                    editor.isActive("bold")
                        ? "bg-yellow-dark text-white"
                        : "bg-gray-200 dark:bg-gray-700"
                }`}
            >
                <BoldIcon className="size-5" />
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleItalic().run()}
                className={`px-1 py-0.5 rounded ${
                    editor.isActive("italic")
                        ? "bg-yellow-dark text-white"
                        : "bg-gray-200 dark:bg-gray-700"
                }`}
            >
                <ItalicIcon className="size-5" />
            </button>

            <button
                type="button"
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={`px-1 py-0.5 rounded ${
                    editor.isActive("bulletList")
                        ? "bg-yellow-dark text-white"
                        : "bg-gray-200 dark:bg-gray-700"
                }`}
            >
                <ListIcon className="size-5" />
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={`px-1 py-0.5 rounded ${
                    editor.isActive("orderedList")
                        ? "bg-yellow-dark text-white"
                        : "bg-gray-200 dark:bg-gray-700"
                }`}
            >
                <ListOrderedIcon className="size-5" />
            </button>
        </div>
    );
};
export default Toolbar;
