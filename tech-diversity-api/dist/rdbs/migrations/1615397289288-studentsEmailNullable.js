"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentsEmailNullable1615397289288 = void 0;
class studentsEmailNullable1615397289288 {
    constructor() {
        this.name = 'studentsEmailNullable1615397289288';
    }
    async up(queryRunner) {
        await queryRunner.query("ALTER TABLE `sync_jobs` CHANGE `started_at` `started_at` timestamp NOT NULL");
        await queryRunner.query("ALTER TABLE `sync_jobs` CHANGE `finished_at` `finished_at` timestamp NOT NULL");
        await queryRunner.query("ALTER TABLE `student_reports` CHANGE `email` `email` varchar(255) NULL");
    }
    async down(queryRunner) {
        await queryRunner.query("ALTER TABLE `student_reports` CHANGE `email` `email` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `sync_jobs` CHANGE `finished_at` `finished_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'");
        await queryRunner.query("ALTER TABLE `sync_jobs` CHANGE `started_at` `started_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'");
    }
}
exports.studentsEmailNullable1615397289288 = studentsEmailNullable1615397289288;
//# sourceMappingURL=1615397289288-studentsEmailNullable.js.map