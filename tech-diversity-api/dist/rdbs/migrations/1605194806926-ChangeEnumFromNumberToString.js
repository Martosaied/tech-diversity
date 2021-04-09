"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeEnumFromNumberToString1605194806926 = void 0;
class ChangeEnumFromNumberToString1605194806926 {
    constructor() {
        this.name = 'ChangeEnumFromNumberToString1605194806926';
    }
    async up(queryRunner) {
        await queryRunner.query("ALTER TABLE `schools` CHANGE `platform` `platform` enum ('flocabulary', 'nearpod') NOT NULL");
        await queryRunner.query("ALTER TABLE `schools` DROP COLUMN `platform_id`");
        await queryRunner.query("ALTER TABLE `schools` ADD `platform_id` int NOT NULL");
        await queryRunner.query("ALTER TABLE `sync_jobs` CHANGE `started_at` `started_at` timestamp NOT NULL");
        await queryRunner.query("ALTER TABLE `sync_jobs` CHANGE `finished_at` `finished_at` timestamp NOT NULL");
        await queryRunner.query("ALTER TABLE `districts` CHANGE `platform` `platform` enum ('flocabulary', 'nearpod') NOT NULL");
        await queryRunner.query("ALTER TABLE `districts` DROP COLUMN `platform_id`");
        await queryRunner.query("ALTER TABLE `districts` ADD `platform_id` int NOT NULL");
        await queryRunner.query("ALTER TABLE `districts` CHANGE `state` `state` enum ('enabled', 'not_enabled') NOT NULL");
        await queryRunner.query("ALTER TABLE `district_settings` CHANGE `value` `value` timestamp NOT NULL");
    }
    async down(queryRunner) {
        await queryRunner.query("ALTER TABLE `district_settings` CHANGE `value` `value` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'");
        await queryRunner.query("ALTER TABLE `districts` CHANGE `state` `state` enum ('0', '1') NOT NULL");
        await queryRunner.query("ALTER TABLE `districts` DROP COLUMN `platform_id`");
        await queryRunner.query("ALTER TABLE `districts` ADD `platform_id` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `districts` CHANGE `platform` `platform` enum ('0', '1') NOT NULL");
        await queryRunner.query("ALTER TABLE `sync_jobs` CHANGE `finished_at` `finished_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'");
        await queryRunner.query("ALTER TABLE `sync_jobs` CHANGE `started_at` `started_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'");
        await queryRunner.query("ALTER TABLE `schools` DROP COLUMN `platform_id`");
        await queryRunner.query("ALTER TABLE `schools` ADD `platform_id` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `schools` CHANGE `platform` `platform` enum ('0', '1') NOT NULL");
    }
}
exports.ChangeEnumFromNumberToString1605194806926 = ChangeEnumFromNumberToString1605194806926;
//# sourceMappingURL=1605194806926-ChangeEnumFromNumberToString.js.map