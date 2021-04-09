"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FixEnumStatusReport1612886140094 = void 0;
class FixEnumStatusReport1612886140094 {
    constructor() {
        this.name = 'FixEnumStatusReport1612886140094';
    }
    async up(queryRunner) {
        await queryRunner.query("ALTER TABLE `school_admins_reports` CHANGE `updated_at` `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `status_reports` CHANGE `report_type` `report_type` enum ('teachers', 'students', 'schooladmins', 'districtadmins', 'sections') NOT NULL");
    }
    async down(queryRunner) {
        await queryRunner.query("ALTER TABLE `status_reports` CHANGE `report_type` `report_type` enum ('teachers', 'students', 'school_admin', 'district_admin', 'sections') NOT NULL");
        await queryRunner.query("ALTER TABLE `school_admins_reports` CHANGE `updated_at` `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)");
    }
}
exports.FixEnumStatusReport1612886140094 = FixEnumStatusReport1612886140094;
//# sourceMappingURL=1612886140094-FixEnumStatusReport.js.map