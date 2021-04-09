import { MigrationInterface, QueryRunner } from "typeorm";
export declare class ChangeEnumFromNumberToString1605194806926 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
