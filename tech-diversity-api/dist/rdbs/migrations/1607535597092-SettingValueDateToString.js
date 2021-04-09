"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingValueDateToString1607535597092 = void 0;
class SettingValueDateToString1607535597092 {
    constructor() {
        this.name = 'SettingValueDateToString1607535597092';
    }
    async up(queryRunner) {
        await queryRunner.query("ALTER TABLE `sync_jobs` CHANGE `started_at` `started_at` timestamp NOT NULL");
        await queryRunner.query("ALTER TABLE `sync_jobs` CHANGE `finished_at` `finished_at` timestamp NOT NULL");
        await queryRunner.query("ALTER TABLE `district_settings` DROP COLUMN `value`");
        await queryRunner.query("ALTER TABLE `district_settings` ADD `value` varchar(255) NOT NULL");
    }
    async down(queryRunner) {
        await queryRunner.query("ALTER TABLE `district_settings` DROP COLUMN `value`");
        await queryRunner.query("ALTER TABLE `district_settings` ADD `value` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'");
        await queryRunner.query("ALTER TABLE `sync_jobs` CHANGE `finished_at` `finished_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'");
        await queryRunner.query("ALTER TABLE `sync_jobs` CHANGE `started_at` `started_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'");
    }
}
exports.SettingValueDateToString1607535597092 = SettingValueDateToString1607535597092;
//# sourceMappingURL=1607535597092-SettingValueDateToString.js.map