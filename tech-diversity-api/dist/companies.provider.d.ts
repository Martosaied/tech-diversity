import { Connection } from 'typeorm';
import { Company } from './models/company.entity';
export declare const companyProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<Company>;
    inject: string[];
}[];
