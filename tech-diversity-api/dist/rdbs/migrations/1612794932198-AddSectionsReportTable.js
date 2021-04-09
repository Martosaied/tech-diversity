"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddSectionsReportTable1612794932198 = void 0;
class AddSectionsReportTable1612794932198 {
    constructor() {
        this.name = 'AddSectionsReportTable1612794932198';
    }
    async up(queryRunner) {
        await queryRunner.query("CREATE TABLE `section_reports` (`id` varchar(36) NOT NULL, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `sync_job_id` varchar(255) NOT NULL, `clever_id` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `sync_jobs` CHANGE `started_at` `started_at` timestamp NOT NULL");
        await queryRunner.query("ALTER TABLE `sync_jobs` CHANGE `finished_at` `finished_at` timestamp NOT NULL");
        await queryRunner.query("ALTER TABLE `section_reports` ADD CONSTRAINT `FK_590525736020fac78c4d57074f2` FOREIGN KEY (`sync_job_id`) REFERENCES `sync_jobs`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }
    async down(queryRunner) {
        await queryRunner.query("ALTER TABLE `section_reports` DROP FOREIGN KEY `FK_590525736020fac78c4d57074f2`");
        await queryRunner.query("ALTER TABLE `sync_jobs` CHANGE `finished_at` `finished_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'");
        await queryRunner.query("ALTER TABLE `sync_jobs` CHANGE `started_at` `started_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'");
        await queryRunner.query("DROP TABLE `section_reports`");
    }
}
exports.AddSectionsReportTable1612794932198 = AddSectionsReportTable1612794932198;
//# sourceMappingURL=1612794932198-AddSectionsReportTable.js.map