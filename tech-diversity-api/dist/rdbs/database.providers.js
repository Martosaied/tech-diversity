"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const typeorm_1 = require("typeorm");
exports.databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => await typeorm_1.createConnection({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            entities: ["dst/**/*.entity.js"],
            username: 'root',
            password: 'root',
            database: 'tech_diversity',
            synchronize: false,
            extra: {
                charset: 'utf8mb4_unicode_ci',
                connectionLimit: 500,
            },
        }),
    },
];
//# sourceMappingURL=database.providers.js.map