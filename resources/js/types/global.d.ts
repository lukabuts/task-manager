import { PageProps as InertiaPageProps } from "@inertiajs/core";
import { AxiosInstance } from "axios";
import { route as ziggyRoute } from "ziggy-js";
import { PageProps as AppPageProps } from "./";

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
}
