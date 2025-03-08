import { PageProps as InertiaPageProps } from "@inertiajs/core";
import { AxiosInstance } from "axios";
import { route as ziggyRoute } from "ziggy-js";
import { PageProps as AppPageProps, TranslationType } from "./";
import { DateObject } from "react-multi-date-picker";

declare global {
    interface Window {
        axios: AxiosInstance;
    }

    /* eslint-disable no-var */
    var route: typeof ziggyRoute;
}

declare module "@inertiajs/core" {
    interface PageProps extends InertiaPageProps, AppPageProps {}
}

interface TaskModalProps {
    showModal: boolean;
    setData: (
        key: keyof TaskFormData | Partial<TaskFormData>,
        value?: string | number | boolean
    ) => void;
    recentlySuccessful: boolean;
    processing: boolean;
    data: TaskFormData;
}

export interface TaskFormData {
    name: string;
    description: string;
    due_date: string;
    priority: string;
    [key: string]: any;
}

type Task = {
    id: number;
    user_id: number;
    name: string;
    completed: boolean;
    completed_at: string | null;
    due_date: string;
    description: string;
    priority: "low" | "medium" | "high";
    created_at: string;
    updated_at: string | null;
};

type PaginatedTasks = {
    current_page: number;
    data: Task[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: {
        url: string | null;
        label: string;
        active: boolean;
    }[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
};

interface ModalPopupProps {
    show: boolean;
    closeModal: () => void;
    onClick: () => void;
    processing: boolean;
    title: string;
    description: string;
}

interface TaskFormCardProps {
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
    data: {
        name?: string;
        due_date?: string;
        priority?: string;
        description?: string;
    };
    setData: (field: string, value: any) => void;
    errors: {
        name?: string;
        due_date?: string;
        priority?: string;
        description?: string;
    };
    processing: boolean;
    type: "create" | "edit";
    disabled: boolean;
}

type MessageType = {
    message: string;
    body?: string;
    type: "success" | "error";
};

type ProfilePartialProps = {
    className?: string;
    translations: TranslationType;
};

interface ICalendarProps {
    setDate: (date: Date) => void;
    date: Date | [Date, Date];
    selectRange: boolean;
    setSelectRange: (range: boolean) => void;
}

interface CalendarProps {
    setDate: any;
    date: any;
    selectRange: boolean;
}

interface ActionProps {
    setDate: any;
    date: any;
    selectRange: boolean;
    setSelectRange: any;
}

interface Filters {
    search?: string;
    priorities?: Array<"low" | "medium" | "high" | "">;
    date: {
        from: string;
        to: string;
    };
    completed: boolean;
    notCompleted: boolean;
}

type FilterDate = {
    from: Date | undefined;
    to: Date | undefined;
};

interface SearchProps {
    setIsSearchModalShown: (isSearchInputFocused: boolean) => void;
    setFilters: (filters: Filters) => void;
    filters: Filters;
    hidden: boolean;
    calendarRef: React.RefObject<HTMLDivElement>;
}

interface FilterCardProps {
    isFilterApplied: boolean;
    params: {
        search?: string;
        completed?: boolean;
        notCompleted?: boolean;
        from?: string;
        to?: string;
        priorities?: string[];
    };
    updateParams: (param: string) => void;
    my_tasks_page: {
        title: string;
        total: string;
        not_completed: string;
        completed: string;
        today: string;
    };
    total: number;
    task_priority: {
        low: string;
        medium: string;
        high: string;
    };
}

interface Params {
    [key: string]: any;
}

interface TaskProgressData {
    completed: number;
    overdue: number;
    due: number;
}
