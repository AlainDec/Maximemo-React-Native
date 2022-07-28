export type TTabContent = {
    id: string;
    title: string;
    content: string;
}
export type TTab = {
    id: number;
    title: string;
    color: number;
    actif: boolean;
    data?: TTabContent[];
}