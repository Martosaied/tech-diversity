"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.districtAdminReport1614962176403 = void 0;
class districtAdminReport1614962176403 {
    constructor() {
        this.name = 'districtAdminReport1614962176403';
    }
    async up(queryRunner) {
        await queryRunner.query("CREATE TABLE `district_admins_reports` (`id` varchar(36) NOT NULL, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `sync_job_id` varchar(255) NOT NULL, `clever_id` varchar(255) NOT NULL, `first_name` varchar(255) NOT NULL, `last_name` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `sync_jobs` CHANGE `started_at` `started_at` timestamp NOT NULL");
        await queryRunner.query("ALTER TABLE `sync_jobs` CHANGE `finished_at` `finished_at` timestamp NOT NULL");
        await queryRunner.query("ALTER TABLE `district_admins_reports` ADD CONSTRAINT `FK_1da71674e6015e7dbb61b679de1` FOREIGN KEY (`sync_job_id`) REFERENCES `sync_jobs`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }
    async down(queryRunner) {
        await queryRunner.query("ALTER TABLE `district_admins_reports` DROP FOREIGN KEY `FK_1da71674e6015e7dbb61b679de1`");
        await queryRunner.query("ALTER TABLE `sync_jobs` CHANGE `finished_at` `finished_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'");
        await queryRunner.query("ALTER TABLE `sync_jobs` CHANGE `started_at` `started_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'");
        await queryRunner.query("DROP TABLE `district_admins_reports`");
    }
}
exports.districtAdminReport1614962176403 = districtAdminReport1614962176403;
//# sourceMappingURL=1614962176403-districtAdminReport.js.map