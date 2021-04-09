"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const company_entity_1 = require("./models/company.entity");
let CompanyService = class CompanyService {
    constructor(companyRepository) {
        this.companyRepository = companyRepository;
    }
    async create(data) {
        const company = new company_entity_1.Company(data.date, data.company, data.type, data.femaleRate, data.maleRate, data.whiteRate, data.asianRate, data.latinoRate, data.blackRate);
        return this.companyRepository.save(company);
    }
    async findById(id) {
        const company = await this.companyRepository.findOne({ id });
        return company;
    }
    async findAll() {
        const companies = await this.companyRepository.find();
        return companies;
    }
    async update(id, data) {
        const company = new company_entity_1.Company(data.date, data.company, data.type, data.femaleRate, data.maleRate, data.whiteRate, data.asianRate, data.latinoRate, data.blackRate);
        company.id = id;
        return this.companyRepository.save(company);
    }
    async delete(id) {
        const company = await this.findById(id);
        return this.companyRepository.softRemove(company);
    }
};
CompanyService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(company_entity_1.Company)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CompanyService);
exports.CompanyService = CompanyService;
//# sourceMappingURL=companies.service.js.map