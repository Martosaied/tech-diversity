import { MigrationInterface, QueryRunner } from "typeorm";
export declare class Init1617923849217 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
