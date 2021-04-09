import {MigrationInterface, QueryRunner} from "typeorm";

export class Init1617924799815 implements MigrationInterface {
    name = 'Init1617924799815'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "techdiversity" ("id" SERIAL NOT NULL, "Date" character varying NOT NULL, "Type" character varying NOT NULL, "Company" character varying NOT NULL, "Female %" numeric NOT NULL, "Male %" numeric NOT NULL, "% White" numeric NOT NULL, "% Asian" numeric NOT NULL, "% Latino" numeric NOT NULL, "% Black" numeric NOT NULL, CONSTRAINT "PK_62d12ae99b14c96ec4d5310efc5" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "techdiversity"`);
    }

}
