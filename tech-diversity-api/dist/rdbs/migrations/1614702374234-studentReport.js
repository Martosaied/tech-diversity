"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentReport1614702374234 = void 0;
class studentReport1614702374234 {
    constructor() {
        this.name = 'studentReport1614702374234';
    }
    async up(queryRunner) {
        await queryRunner.query("CREATE TABLE `student_reports` (`id` varchar(36) NOT NULL, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `sync_job_id` varchar(255) NOT NULL, `clever_id` varchar(255) NOT NULL, `first_name` varchar(255) NOT NULL, `last_name` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `sync_jobs` CHANGE `started_at` `started_at` timestamp NOT NULL");
        await queryRunner.query("ALTER TABLE `sync_jobs` CHANGE `finished_at` `finished_at` timestamp NOT NULL");
        await queryRunner.query("ALTER TABLE `student_reports` ADD CONSTRAINT `FK_a23d7d3fd51f1d944836be38fa6` FOREIGN KEY (`sync_job_id`) REFERENCES `sync_jobs`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }
    async down(queryRunner) {
        await queryRunner.query("ALTER TABLE `student_reports` DROP FOREIGN KEY `FK_a23d7d3fd51f1d944836be38fa6`");
        await queryRunner.query("ALTER TABLE `sync_jobs` CHANGE `finished_at` `finished_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'");
        await queryRunner.query("ALTER TABLE `sync_jobs` CHANGE `started_at` `started_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'");
        await queryRunner.query("DROP TABLE `student_reports`");
    }
}
exports.studentReport1614702374234 = studentReport1614702374234;
//# sourceMappingURL=1614702374234-studentReport.js.map