"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddSchoolAdmin1612796472343 = void 0;
class AddSchoolAdmin1612796472343 {
    constructor() {
        this.name = 'AddSchoolAdmin1612796472343';
    }
    async up(queryRunner) {
        await queryRunner.query("CREATE TABLE `school_admins_reports` (`id` varchar(36) NOT NULL, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `sync_job_id` varchar(255) NOT NULL, `clever_id` varchar(255) NOT NULL, `first_name` varchar(255) NOT NULL, `last_name` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `school_admins_reports` ADD CONSTRAINT `FK_55a20e799001bab8b4e323421b1` FOREIGN KEY (`sync_job_id`) REFERENCES `sync_jobs`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }
    async down(queryRunner) {
        await queryRunner.query("ALTER TABLE `school_admins_reports` DROP FOREIGN KEY `FK_55a20e799001bab8b4e323421b1`");
        await queryRunner.query("DROP TABLE `school_admins_reports`");
    }
}
exports.AddSchoolAdmin1612796472343 = AddSchoolAdmin1612796472343;
//# sourceMappingURL=1612796472343-AddSchoolAdmin.js.map