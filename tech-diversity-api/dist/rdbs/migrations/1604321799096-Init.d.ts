import { MigrationInterface, QueryRunner } from "typeorm";
export declare class Init1604321799096 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
