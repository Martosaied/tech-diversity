import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CompanyDto } from './dtos/company.dto';
import { Company } from './models/company.entity';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private companyRepository: Repository<Company>,
  ) {}

	async create(data: CompanyDto): Promise<Company> {
    const company = new Company(
			data.date,
			data.company,
			data.type,
			data.femaleRate,
			data.maleRate,
			data.whiteRate,
			data.asianRate,
			data.latinoRate,
			data.blackRate,
    );
    return this.companyRepository.save(company);

	}

	async findById(id: number): Promise<Company> {
		const company = await this.companyRepository.findOne({id});
		return company;
	}

	async findAll(): Promise<Company[]> {
		const companies = await this.companyRepository.find();
		return companies;
  }
  
  async update(id: number, data: CompanyDto): Promise<Company> {
    const company = new Company(
			data.date,
			data.company,
			data.type,
			data.femaleRate,
			data.maleRate,
			data.whiteRate,
			data.asianRate,
			data.latinoRate,
			data.blackRate,
    );
    company.id = id;
		return this.companyRepository.save(company);
	}

	async delete(id: number): Promise<Company> {
		const company = await this.findById(id);
		return this.companyRepository.softRemove(company);
	}
}
