"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Init1604321799096 = void 0;
class Init1604321799096 {
    constructor() {
        this.name = 'Init1604321799096';
    }
    async up(queryRunner) {
        await queryRunner.query("CREATE TABLE `schools` (`id` varchar(36) NOT NULL, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `clever_id` varchar(255) NOT NULL, `platform` enum ('0', '1') NOT NULL, `platform_id` varchar(255) NOT NULL, `district_id` varchar(36) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `sync_jobs` (`id` varchar(36) NOT NULL, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `last_event_id` varchar(255) NULL, `started_at` timestamp NOT NULL, `finished_at` timestamp NOT NULL, `status` enum ('0', '1') NOT NULL, `district_id` varchar(36) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `districts` (`id` varchar(36) NOT NULL, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `deleted_at` timestamp(6) NULL, `clever_id` varchar(255) NOT NULL, `platform` enum ('0', '1') NOT NULL, `platform_id` varchar(255) NOT NULL, `state` enum ('0', '1') NOT NULL, `oauth_token` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `settings` (`id` varchar(36) NOT NULL, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `description` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `district_settings` (`id` varchar(36) NOT NULL, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `deleted_at` timestamp(6) NULL, `value` timestamp NOT NULL, `district_id` varchar(36) NOT NULL, `setting_id` varchar(36) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `schools` ADD CONSTRAINT `FK_e132cf1a5ee0510c7bd221eb83c` FOREIGN KEY (`district_id`) REFERENCES `districts`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `sync_jobs` ADD CONSTRAINT `FK_ef45b2911cdf73a1d340a35504e` FOREIGN KEY (`district_id`) REFERENCES `districts`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `district_settings` ADD CONSTRAINT `FK_ae5ea84f1aa71f8b037d8cdd549` FOREIGN KEY (`district_id`) REFERENCES `districts`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `district_settings` ADD CONSTRAINT `FK_a34d220c76d64665e6b820284a6` FOREIGN KEY (`setting_id`) REFERENCES `settings`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }
    async down(queryRunner) {
        await queryRunner.query("ALTER TABLE `district_settings` DROP FOREIGN KEY `FK_a34d220c76d64665e6b820284a6`");
        await queryRunner.query("ALTER TABLE `district_settings` DROP FOREIGN KEY `FK_ae5ea84f1aa71f8b037d8cdd549`");
        await queryRunner.query("ALTER TABLE `sync_jobs` DROP FOREIGN KEY `FK_ef45b2911cdf73a1d340a35504e`");
        await queryRunner.query("ALTER TABLE `schools` DROP FOREIGN KEY `FK_e132cf1a5ee0510c7bd221eb83c`");
        await queryRunner.query("DROP TABLE `district_settings`");
        await queryRunner.query("DROP TABLE `settings`");
        await queryRunner.query("DROP TABLE `districts`");
        await queryRunner.query("DROP TABLE `sync_jobs`");
        await queryRunner.query("DROP TABLE `schools`");
    }
}
exports.Init1604321799096 = Init1604321799096;
//# sourceMappingURL=1604321799096-Init.js.map