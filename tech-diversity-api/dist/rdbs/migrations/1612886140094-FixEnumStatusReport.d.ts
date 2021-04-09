import { MigrationInterface, QueryRunner } from "typeorm";
export declare class FixEnumStatusReport1612886140094 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
