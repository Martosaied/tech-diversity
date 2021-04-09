"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.platformIdDataTypeChange1604605093934 = void 0;
class platformIdDataTypeChange1604605093934 {
    constructor() {
        this.name = 'platformIdDataTypeChange1604605093934';
    }
    async up(queryRunner) {
        await queryRunner.query("ALTER TABLE `schools` DROP COLUMN `platform_id`");
        await queryRunner.query("ALTER TABLE `schools` ADD `platform_id` int NOT NULL");
        await queryRunner.query("ALTER TABLE `sync_jobs` CHANGE `started_at` `started_at` timestamp NOT NULL");
        await queryRunner.query("ALTER TABLE `sync_jobs` CHANGE `finished_at` `finished_at` timestamp NOT NULL");
        await queryRunner.query("ALTER TABLE `districts` DROP COLUMN `platform_id`");
        await queryRunner.query("ALTER TABLE `districts` ADD `platform_id` int NOT NULL");
        await queryRunner.query("ALTER TABLE `district_settings` CHANGE `value` `value` timestamp NOT NULL");
    }
    async down(queryRunner) {
        await queryRunner.query("ALTER TABLE `district_settings` CHANGE `value` `value` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'");
        await queryRunner.query("ALTER TABLE `districts` DROP COLUMN `platform_id`");
        await queryRunner.query("ALTER TABLE `districts` ADD `platform_id` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `sync_jobs` CHANGE `finished_at` `finished_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'");
        await queryRunner.query("ALTER TABLE `sync_jobs` CHANGE `started_at` `started_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'");
        await queryRunner.query("ALTER TABLE `schools` DROP COLUMN `platform_id`");
        await queryRunner.query("ALTER TABLE `schools` ADD `platform_id` varchar(255) NOT NULL");
    }
}
exports.platformIdDataTypeChange1604605093934 = platformIdDataTypeChange1604605093934;
//# sourceMappingURL=1604605093934-platformIdDataTypeChange.js.map