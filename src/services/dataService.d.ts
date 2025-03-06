export interface Produkt {
    id: number;
    src: string;
    src2: string;
    title: string;
    nadpis: string;
}
export interface Karty {
    id: number;
    src: string;
    src2: string;
    title: string;
    nadpis: string;
}
export declare const produkty: any;
export declare const karty: any;
export declare const fetchJSON: (src_json: string) => Promise<Produkt[]>;
export declare const useDataLoader: () => {
    produkty: any;
    karty: any;
};
