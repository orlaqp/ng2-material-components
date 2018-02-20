export class MenuItem {
    id?: string;
    title?: string;
    originalIcon?: string;
    icon?: string;
    order?: number;
    route?: string;
    url?: string;
    externalUrl?: string;
    children?: MenuItem[];
    active?: boolean;
}
