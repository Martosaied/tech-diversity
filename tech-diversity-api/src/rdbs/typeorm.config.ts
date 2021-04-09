import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

const SOURCE_PATH = process.env.NODE_ENV ? 'dist' : 'src';

@Injectable()
export class TypeOrmConfig implements TypeOrmOptionsFactory {
	createTypeOrmOptions(): TypeOrmModuleOptions {
		return {
			type: 'postgres',
			host: 'localhost',
			port: 5432,
			entities: ["src/**/*.entity.js"],
			username: 'root',
			password: 'root',
			database: 'tech_diversity',
			synchronize: false,
			extra: {
				charset: 'utf8mb4_unicode_ci',
				connectionLimit: 500,
			},
		};
	}
}
