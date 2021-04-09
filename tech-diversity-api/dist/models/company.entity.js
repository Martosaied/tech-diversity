"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
const typeorm_1 = require("typeorm");
let Company = class Company {
    constructor(date, type, company, femaleRate, maleRate, whiteRate, asianRate, latinoRate, blackRate) {
        this.date = date,
            this.type = type;
        this.company = company;
        this.femaleRate = femaleRate;
        this.maleRate = maleRate;
        this.whiteRate = whiteRate;
        this.asianRate = asianRate;
        this.latinoRate = latinoRate;
        this.blackRate = blackRate;
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Company.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ name: 'Date' }),
    __metadata("design:type", String)
], Company.prototype, "date", void 0);
__decorate([
    typeorm_1.Column({ name: 'Type' }),
    __metadata("design:type", String)
], Company.prototype, "type", void 0);
__decorate([
    typeorm_1.Column({ name: 'Company' }),
    __metadata("design:type", String)
], Company.prototype, "company", void 0);
__decorate([
    typeorm_1.Column({ type: 'decimal', name: 'Female %' }),
    __metadata("design:type", Number)
], Company.prototype, "femaleRate", void 0);
__decorate([
    typeorm_1.Column({ type: 'decimal', name: 'Male %' }),
    __metadata("design:type", Number)
], Company.prototype, "maleRate", void 0);
__decorate([
    typeorm_1.Column({ type: 'decimal', name: '% White' }),
    __metadata("design:type", Number)
], Company.prototype, "whiteRate", void 0);
__decorate([
    typeorm_1.Column({ type: 'decimal', name: '% Asian' }),
    __metadata("design:type", Number)
], Company.prototype, "asianRate", void 0);
__decorate([
    typeorm_1.Column({ type: 'decimal', name: '% Latino' }),
    __metadata("design:type", Number)
], Company.prototype, "latinoRate", void 0);
__decorate([
    typeorm_1.Column({ type: 'decimal', name: '% Black' }),
    __metadata("design:type", Number)
], Company.prototype, "blackRate", void 0);
Company = __decorate([
    typeorm_1.Entity({
        name: 'techdiversity',
    }),
    __metadata("design:paramtypes", [String, String, String, Number, Number, Number, Number, Number, Number])
], Company);
exports.Company = Company;
//# sourceMappingURL=company.entity.js.map