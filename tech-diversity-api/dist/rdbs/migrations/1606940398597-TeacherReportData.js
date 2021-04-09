"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherReportData1606940398597 = void 0;
class TeacherReportData1606940398597 {
    constructor() {
        this.name = 'TeacherReportData1606940398597';
    }
    async up(queryRunner) {
        await queryRunner.query("CREATE TABLE `teacher_reports` (`id` varchar(36) NOT NULL, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `sync_job_id` varchar(255) NOT NULL, `clever_id` varchar(255) NOT NULL, `first_name` varchar(255) NOT NULL, `last_name` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `status_reports` DROP COLUMN `entity_type`");
        await queryRunner.query("ALTER TABLE `status_reports` DROP COLUMN `entity_id`");
        await queryRunner.query("ALTER TABLE `status_reports` DROP COLUMN `error_code`");
        await queryRunner.query("ALTER TABLE `status_reports` ADD `report_type` enum ('teachers', 'students') NOT NULL");
        await queryRunner.query("ALTER TABLE `status_reports` ADD `report_id` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `status_reports` ADD `status_code` int NOT NULL");
        await queryRunner.query("ALTER TABLE `sync_jobs` CHANGE `started_at` `started_at` timestamp NOT NULL");
        await queryRunner.query("ALTER TABLE `sync_jobs` CHANGE `finished_at` `finished_at` timestamp NOT NULL");
        await queryRunner.query("ALTER TABLE `district_settings` CHANGE `value` `value` timestamp NOT NULL");
        await queryRunner.query("ALTER TABLE `teacher_reports` ADD CONSTRAINT `FK_2c89c17f65a6906f15344f7ccb0` FOREIGN KEY (`sync_job_id`) REFERENCES `sync_jobs`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }
    async down(queryRunner) {
        await queryRunner.query("ALTER TABLE `teacher_reports` DROP FOREIGN KEY `FK_2c89c17f65a6906f15344f7ccb0`");
        await queryRunner.query("ALTER TABLE `district_settings` CHANGE `value` `value` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'");
        await queryRunner.query("ALTER TABLE `sync_jobs` CHANGE `finished_at` `finished_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'");
        await queryRunner.query("ALTER TABLE `sync_jobs` CHANGE `started_at` `started_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'");
        await queryRunner.query("ALTER TABLE `status_reports` DROP COLUMN `status_code`");
        await queryRunner.query("ALTER TABLE `status_reports` DROP COLUMN `report_id`");
        await queryRunner.query("ALTER TABLE `status_reports` DROP COLUMN `report_type`");
        await queryRunner.query("ALTER TABLE `status_reports` ADD `error_code` int NOT NULL");
        await queryRunner.query("ALTER TABLE `status_reports` ADD `entity_id` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `status_reports` ADD `entity_type` enum ('teachers', 'students') NOT NULL");
        await queryRunner.query("DROP TABLE `teacher_reports`");
    }
}
exports.TeacherReportData1606940398597 = TeacherReportData1606940398597;
//# sourceMappingURL=1606940398597-TeacherReportData.js.map