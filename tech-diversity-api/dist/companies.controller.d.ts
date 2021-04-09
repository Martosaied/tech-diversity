import { CompanyDto } from './dtos/company.dto';
import { Company } from './models/company.entity';
import { CompanyService } from './companies.service';
export declare class CompanyController {
    private readonly companyService;
    constructor(companyService: CompanyService);
    create(req: CompanyDto): Promise<Company>;
    read(): Promise<Company[]>;
    readOne(id: string): Promise<Company>;
    update(id: string, req: CompanyDto): Promise<Company>;
    delete(id: string): Promise<Company>;
}
