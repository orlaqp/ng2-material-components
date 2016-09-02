export interface IMenuItem {
    id: string;
    title?: string;
    icon?: string;
    order?: number;
    route?: string;
    url?: string;
    children?: IMenuItem[];
}
