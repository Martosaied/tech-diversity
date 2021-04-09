"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddSectionReportType1611858880215 = void 0;
class AddSectionReportType1611858880215 {
    constructor() {
        this.name = 'AddSectionReportType1611858880215';
    }
    async up(queryRunner) {
        await queryRunner.query("ALTER TABLE `status_reports` CHANGE `report_type` `report_type` enum ('teachers', 'students', 'school_admin', 'district_admin', 'sections') NOT NULL");
        await queryRunner.query("ALTER TABLE `sync_jobs` CHANGE `started_at` `started_at` timestamp NOT NULL");
        await queryRunner.query("ALTER TABLE `sync_jobs` CHANGE `finished_at` `finished_at` timestamp NOT NULL");
    }
    async down(queryRunner) {
        await queryRunner.query("ALTER TABLE `sync_jobs` CHANGE `finished_at` `finished_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'");
        await queryRunner.query("ALTER TABLE `sync_jobs` CHANGE `started_at` `started_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'");
        await queryRunner.query("ALTER TABLE `status_reports` CHANGE `report_type` `report_type` enum ('teachers', 'students') NOT NULL");
    }
}
exports.AddSectionReportType1611858880215 = AddSectionReportType1611858880215;
//# sourceMappingURL=1611858880215-AddSectionReportType.js.map