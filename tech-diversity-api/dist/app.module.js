"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const companies_module_1 = require("./companies.module");
const company_entity_1 = require("./models/company.entity");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            companies_module_1.CompaniesModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'tech-diversity-db',
                port: 5432,
                entities: [company_entity_1.Company],
                username: 'root',
                password: 'root',
                database: 'tech_diversity',
                synchronize: false,
                extra: {
                    charset: 'utf8mb4_unicode_ci',
                    connectionLimit: 500,
                },
            }),
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map