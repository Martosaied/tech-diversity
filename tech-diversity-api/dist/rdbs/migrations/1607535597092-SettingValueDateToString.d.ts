import { MigrationInterface, QueryRunner } from "typeorm";
export declare class SettingValueDateToString1607535597092 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
