import { Company } from './models/company.entity';
import { Repository } from 'typeorm';
export declare class CompanyRepositoryImpl {
    private readonly companyRepository;
    constructor(companyRepository: Repository<Company>);
    create(data: Company): Promise<Company>;
    update(id: string, data: Company): Promise<Company>;
    findById(id: string): Promise<Company>;
    findAll(): Promise<Company[]>;
    delete(id: string): Promise<Company>;
}
