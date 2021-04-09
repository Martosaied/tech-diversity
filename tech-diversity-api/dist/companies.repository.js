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
exports.CompanyRepositoryImpl = void 0;
const company_entity_1 = require("./models/company.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let CompanyRepositoryImpl = class CompanyRepositoryImpl {
    constructor(companyRepository) {
        this.companyRepository = companyRepository;
    }
    async create(data) {
        return this.companyRepository.save(data);
    }
    async update(id, data) {
        const company = await this.companyRepository.findOne({
            where: { id }
        });
        return this.companyRepository.save(Object.assign(Object.assign({}, company), data));
    }
    async findById(id) {
        const company = await this.companyRepository.findOne({ id });
        return company;
    }
    async findAll() {
        const companies = await this.companyRepository.find();
        return companies;
    }
    async delete(id) {
        const company = await this.findById(id);
        return this.companyRepository.softRemove(company);
    }
};
CompanyRepositoryImpl = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(company_entity_1.Company)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CompanyRepositoryImpl);
exports.CompanyRepositoryImpl = CompanyRepositoryImpl;
//# sourceMappingURL=companies.repository.js.map