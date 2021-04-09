"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Init1617924799815 = void 0;
class Init1617924799815 {
    constructor() {
        this.name = 'Init1617924799815';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "techdiversity" ("id" character varying NOT NULL, "Date" character varying NOT NULL, "Type" character varying NOT NULL, "Company" character varying NOT NULL, "Female %" numeric NOT NULL, "Male %" numeric NOT NULL, "% White" numeric NOT NULL, "% Asian" numeric NOT NULL, "% Latino" numeric NOT NULL, "% Black" numeric NOT NULL, CONSTRAINT "PK_62d12ae99b14c96ec4d5310efc5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`INSERT INTO "techdiversity" VALUES
            ('1', 'Aug 2016','Country','U.S. Population',50.79,49.21,64,4,16,12),
            ('2', 'Aug 2016','Government','US Congress',19,81,80,5.6,6,8),
            ('3', 'Aug 2016','Entity','Venture Capitalists',11,89,87,9,2,2),
            ('4', 'Aug 2016','Social Media','Facebook',33,67,53,38,4,2),
            ('5', 'Aug 2016','Social Media','Instagram',31,69,57,34,4,2),
            ('6', 'Aug 2016','Social Media','Google+',30,70,60,31,3,2),
            ('7', 'Aug 2016','Social Media','YouTube',30,70,61,30,3,2),
            ('8', 'Aug 2016','Social Media','LinkedIn',42,58,56,37,4,2),
            ('9', 'Aug 2016','Social Media','Pinterest',40,60,50,42,2,1),
            ('10', 'Aug 2016','Social Media','Tumblr',37,62,50,39,4,2),
            ('11', 'Aug 2016','Social Media','Flickr',37,62,50,39,4,2),
            ('12', 'Aug 2016','Social Media','Twitter',34,56,59,29,3,2),
            ('13', 'Aug 2016','Tech','Yahoo!',37,62,47,43,4,2),
            ('14', 'Aug 2016','Tech','Google',31,69,59,32,3,2),
            ('15', 'Aug 2016','Tech','Apple',32,68,56,19,12,9),
            ('16', 'Aug 2016','Tech','eBay',43,57,60,25,5,8),
            ('17', 'Aug 2016','Tech','HP',33,67,72,6,14,7),
            ('18', 'Aug 2016','Tech','Indiegogo',45,55,64,23,8,2),
            ('19', 'Aug 2016','Tech','Nvidia',16.05,83.95,38,44,3,1),
            ('20', 'Aug 2016','Tech','Dell',30,70.45,68.65,9.11,11.14,10.04),
            ('21', 'Aug 2016','Tech','Ingram Micro',42,58.22,63.03,10.52,15.7,10.13),
            ('22', 'Aug 2016','Tech','Intel',25,75.44,60.81,26.05,8.63,3.61),
            ('23', 'Aug 2016','Tech','Groupon',47,53,71,15,5,4),
            ('24', 'Aug 2016','Tech','Amazon',37,63,60,13,9,15),
            ('25', 'Aug 2016','Tech','Etsy',51,49,79,11,4,3),
            ('26', 'Aug 2016','Tech','Microsoft',28,72,59,28.9,5.1,3.5),
            ('27', 'Aug 2016','Tech','Salesforce',29,71,67,22,4,2),
            ('28', 'Aug 2016','Tech','Pandora',49,51,71,12,7,3);`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "techdiversity"`);
    }
}
exports.Init1617924799815 = Init1617924799815;
//# sourceMappingURL=1617924799815-Init.js.map