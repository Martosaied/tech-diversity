"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddStatusSyncjob1606926394246 = void 0;
class AddStatusSyncjob1606926394246 {
    constructor() {
        this.name = 'AddStatusSyncjob1606926394246';
    }
    async up(queryRunner) {
        await queryRunner.query("ALTER TABLE `sync_jobs` CHANGE `status` `status` enum ('0', '1', '2') NOT NULL");
    }
    async down(queryRunner) {
        await queryRunner.query("ALTER TABLE `sync_jobs` CHANGE `status` `status` enum ('0', '1') NOT NULL");
    }
}
exports.AddStatusSyncjob1606926394246 = AddStatusSyncjob1606926394246;
//# sourceMappingURL=1606926394246-AddStatusSyncjob.js.map