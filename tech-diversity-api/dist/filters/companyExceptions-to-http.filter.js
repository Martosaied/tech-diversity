"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyExceptionsFilter = void 0;
const common_1 = require("@nestjs/common");
let CompanyExceptionsFilter = class CompanyExceptionsFilter {
    catch(exception, host) {
        const response = host.switchToHttp().getResponse();
        return response
            .status(exception.type || common_1.HttpStatus.INTERNAL_SERVER_ERROR)
            .send(exception.message || 'Internal server error');
    }
};
CompanyExceptionsFilter = __decorate([
    common_1.Catch()
], CompanyExceptionsFilter);
exports.CompanyExceptionsFilter = CompanyExceptionsFilter;
//# sourceMappingURL=companyExceptions-to-http.filter.js.map