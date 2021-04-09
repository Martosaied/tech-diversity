"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Init1617924799815 = void 0;
class Init1617924799815 {
    constructor() {
        this.name = 'Init1617924799815';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "techdiversity" ("id" SERIAL NOT NULL, "Date" character varying NOT NULL, "Type" character varying NOT NULL, "Company" character varying NOT NULL, "Female %" numeric NOT NULL, "Male %" numeric NOT NULL, "% White" numeric NOT NULL, "% Asian" numeric NOT NULL, "% Latino" numeric NOT NULL, "% Black" numeric NOT NULL, CONSTRAINT "PK_62d12ae99b14c96ec4d5310efc5" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "techdiversity"`);
    }
}
exports.Init1617924799815 = Init1617924799815;
//# sourceMappingURL=1617924799815-Init.js.map