"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.companyProviders = void 0;
const company_entity_1 = require("./models/company.entity");
exports.companyProviders = [
    {
        provide: 'COMPANY_REPOSITORY',
        useFactory: (connection) => connection.getRepository(company_entity_1.Company),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=companies.provider.js.map