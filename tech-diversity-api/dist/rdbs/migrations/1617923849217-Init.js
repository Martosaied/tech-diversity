"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Init1617923849217 = void 0;
class Init1617923849217 {
    constructor() {
        this.name = 'Init1617923849217';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "techdiversity" ("id" SERIAL NOT NULL, "Date" TIMESTAMP NOT NULL DEFAULT now(), "Type" TIMESTAMP, "Company" character varying NOT NULL, "Female %" numeric NOT NULL, "Male %" numeric NOT NULL, "% White" numeric NOT NULL, "% Asian" numeric NOT NULL, "% Latino" numeric NOT NULL, "% Black" numeric NOT NULL, CONSTRAINT "PK_62d12ae99b14c96ec4d5310efc5" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "techdiversity"`);
    }
}
exports.Init1617923849217 = Init1617923849217;
//# sourceMappingURL=1617923849217-Init.js.map