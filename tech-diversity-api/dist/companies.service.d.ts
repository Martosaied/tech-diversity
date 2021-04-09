import { Repository } from 'typeorm';
import { CompanyDto } from './dtos/company.dto';
import { Company } from './models/company.entity';
export declare class CompanyService {
    private companyRepository;
    constructor(companyRepository: Repository<Company>);
    create(data: CompanyDto): Promise<Company>;
    findById(id: number): Promise<Company>;
    findAll(): Promise<Company[]>;
    update(id: number, data: CompanyDto): Promise<Company>;
    delete(id: number): Promise<Company>;
}
