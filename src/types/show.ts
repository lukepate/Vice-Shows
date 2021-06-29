export interface Show {
    id: string;
    title: string;
    episodes: number;
    product_image_url: string;
}

export enum Action {
    PUSH ='PUSH',
    POP = 'POP',
    REPLACE = 'REPLACE'
}
