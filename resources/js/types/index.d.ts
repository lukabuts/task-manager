import { Config } from "ziggy-js";
import { MessageType } from "./global";

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
    photo?: string;
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
};
