"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusReportTable1606840800771 = void 0;
class StatusReportTable1606840800771 {
    constructor() {
        this.name = 'StatusReportTable1606840800771';
    }
    async up(queryRunner) {
        await queryRunner.query("CREATE TABLE `status_reports` (`id` varchar(36) NOT NULL, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `event_id` varchar(255) NULL, `sync_job_id` varchar(255) NOT NULL, `platform` enum ('flocabulary', 'nearpod') NOT NULL, `platform_school_id` int NOT NULL, `entity_type` enum ('teachers', 'students') NOT NULL, `type` enum ('deleted', 'created', 'updated', 'full_sync') NOT NULL, `entity_id` varchar(255) NULL, `error_code` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `sync_jobs` CHANGE `started_at` `started_at` timestamp NOT NULL");
        await queryRunner.query("ALTER TABLE `sync_jobs` CHANGE `finished_at` `finished_at` timestamp NOT NULL");
        await queryRunner.query("ALTER TABLE `district_settings` CHANGE `value` `value` timestamp NOT NULL");
        await queryRunner.query("ALTER TABLE `status_reports` ADD CONSTRAINT `FK_1dbfdda24bf58fd1fb421e60fe2` FOREIGN KEY (`sync_job_id`) REFERENCES `sync_jobs`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }
    async down(queryRunner) {
        await queryRunner.query("ALTER TABLE `status_reports` DROP FOREIGN KEY `FK_1dbfdda24bf58fd1fb421e60fe2`");
        await queryRunner.query("ALTER TABLE `district_settings` CHANGE `value` `value` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'");
        await queryRunner.query("ALTER TABLE `sync_jobs` CHANGE `finished_at` `finished_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'");
        await queryRunner.query("ALTER TABLE `sync_jobs` CHANGE `started_at` `started_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'");
        await queryRunner.query("DROP TABLE `status_reports`");
    }
}
exports.StatusReportTable1606840800771 = StatusReportTable1606840800771;
//# sourceMappingURL=1606840800771-StatusReportTable.js.map