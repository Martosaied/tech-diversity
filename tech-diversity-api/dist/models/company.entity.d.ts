export declare class Company {
    id: string;
    date: string;
    type: string;
    company: string;
    femaleRate: number;
    maleRate: number;
    whiteRate: number;
    asianRate: number;
    latinoRate: number;
    blackRate: number;
    beforeInsert(): void;
    constructor(date?: string, type?: string, company?: string, femaleRate?: number, maleRate?: number, whiteRate?: number, asianRate?: number, latinoRate?: number, blackRate?: number);
}
