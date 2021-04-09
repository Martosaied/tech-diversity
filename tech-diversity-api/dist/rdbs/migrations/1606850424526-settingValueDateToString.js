"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.settingValueDateToString1606850424526 = void 0;
class settingValueDateToString1606850424526 {
    constructor() {
        this.name = 'settingValueDateToString1606850424526';
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
exports.settingValueDateToString1606850424526 = settingValueDateToString1606850424526;
//# sourceMappingURL=1606850424526-settingValueDateToString.js.map