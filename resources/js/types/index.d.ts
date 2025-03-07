import { Config } from "ziggy-js";
import { MessageType } from "./global";

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
    photo?: string;
    theme: "light" | "dark" | "system";
    locale: "ka" | "en";
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };
    ziggy: Config & { location: string };
    flash: {
        message: MessageType | null;
    };
    translations: TranslationType;
    locale: "en" | "ka";
};

type TranslationType = {
    auth: {
        title: string;
        welcome: string;
        description: string;
        form: {
            title: string;
            name: string;
            email: string;
            password: string;
            confirm_password: string;
            remember_me: string;
            forgot_password: string;
            log_in: string;
            register: string;
            already_registered: string;
        };
        forgot_password: {
            title: string;
            description: string;
            email_reset_link: string;
        };
        reset_password: {
            title: string;
        };
        confirm_password: {
            title: string;
            description: string;
            confirm: string;
        };
        verify_email: {
            title: string;
            description: string;
            send: string;
            success: string;
        };
    };
    layout: {
        nav: {
            dashboard: string;
            my_tasks: string;
            setting: string;
            logout: string;
        };
        header: {
            search: string;
            new_task: string;
            profile: string;
        };
        search_modal: {
            filter_by: string;
            completed: string;
            not_completed: string;
            upload_date: string;
            pick_a_date: string;
            priority: string;
            filter: string;
        };
    };
    task_priority: {
        high: string;
        medium: string;
        low: string;
    };
    my_tasks_page: {
        title: string;
        total: string;
        not_completed: string;
        completed: string;
        today: string;
        due: string;
        next: string;
        previous: string;
        no_task: string;
        filter_no_results: string;
        clear_filters: string;
        priority: {
            high: string;
            medium: string;
            low: string;
        };
    };
    task_page: {
        title: string;
        back_to_tasks: string;
        due_date: string;
        priority: string;
        completed: {
            not: string;
            completed: string;
        };
        status: string;
        delete: string;
        edit: string;
        confirm: {
            title: string;
            description: string;
            delete: string;
            cancel: string;
        };
    };
    task_form_page: {
        due_date: string;
        priority: string;
        priorities: string;
        select_priority: string;
        name_of_task: string;
        description: string;
        description_of_task: string;
        cancel: string;
        edit: string;
        create: string;
    };
    dashboard: {
        title: string;
    };
    setting_page: {
        title: string;
        settings: {
            title: string;
            description: string;
            theme?: string;
            language: string;
        };
        profile_photo: {
            title: string;
            description: string;
            upload_photo: string;
            clear_photo: string;
            remove: string;
            supported_formats: string;
            max_size: string;
            delete: {
                title: string;
                description: string;
            };
        };
        profile_information: {
            title: string;
            description: string;
            name: string;
            email: string;
        };
        update_password: {
            title: string;
            description: string;
            current_password: string;
            new_password: string;
            confirm_password: string;
        };
        delete_account: {
            title: string;
            description: string;
            delete: string;
            confirm: {
                title: string;
                description: string;
                password: string;
                delete: string;
                cancel: string;
            };
        };
    };
    locales: {
        en: string;
        ka: string;
    };
    delete: string;
    Saved: string;
    save: string;
    and: string;
};
