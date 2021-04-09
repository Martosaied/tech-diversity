import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { CompanyDto } from './dtos/company.dto';
import { Company } from './models/company.entity';
import { CompanyService } from './companies.service';

@Controller('companies')
export class CompanyController {
	constructor(private readonly companyService: CompanyService) {}

	@Post()
	create(@Body() req: CompanyDto): Promise<Company> {
		return this.companyService.create(req);
	}

	@Get()
	read(): Promise<Company[]> {
		return this.companyService.findAll();
	}

	@Get(':id')
	readOne(@Param('id') id: string): Promise<Company> {
		return this.companyService.findById(id);
	}

	@Put(':id')
	update(@Param('id') id: string, @Body() req: CompanyDto): Promise<Company> {
		return this.companyService.update(id, req);
	}

	@Delete(':id')
	delete(@Param('id') id: string): Promise<Company> {
		return this.companyService.delete(id);
	}

}
