import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompaniesModule } from './companies.module';
import { Company } from './models/company.entity';

@Module({
	imports: [
        CompaniesModule,
        TypeOrmModule.forRoot({
            type: 'postgres',
			host: 'localhost',
			port: 5432,
			entities: [Company],
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
export class AppModule {}
