export interface IMenuItem {
    id: string;
    title: string;
    icon?: string;
    component?: string;
    action?: string;
    order?: number;
    route?: string;
    url?: string;
    children?: IMenuItem[];
}
