"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.CoffeesController = void 0;
var common_1 = require("@nestjs/common");
var CoffeesController = /** @class */ (function () {
    function CoffeesController(coffeesService) {
        this.coffeesService = coffeesService;
    }
    CoffeesController.prototype.findAll = function (paginationQuery) {
        //const { limit, offset } = paginationQuery;
        return this.coffeesService.findAll();
    };
    CoffeesController.prototype.findOne = function (id) {
        return this.coffeesService.findOne(id);
    };
    CoffeesController.prototype.create = function (body) {
        return this.coffeesService.create(body);
    };
    CoffeesController.prototype.update = function (id, body) {
        return this.coffeesService.update(id, body);
    };
    CoffeesController.prototype.remove = function (id) {
        return this.coffeesService.remove(id);
    };
    __decorate([
        common_1.Get(),
        __param(0, common_1.Query())
    ], CoffeesController.prototype, "findAll");
    __decorate([
        common_1.Get(':id'),
        __param(0, common_1.Param('id'))
    ], CoffeesController.prototype, "findOne");
    __decorate([
        common_1.Post(),
        __param(0, common_1.Body())
    ], CoffeesController.prototype, "create");
    __decorate([
        common_1.Patch(':id'),
        __param(0, common_1.Param('id')), __param(1, common_1.Body())
    ], CoffeesController.prototype, "update");
    __decorate([
        common_1.Delete(':id'),
        __param(0, common_1.Param('id'))
    ], CoffeesController.prototype, "remove");
    CoffeesController = __decorate([
        common_1.Controller('coffees')
    ], CoffeesController);
    return CoffeesController;
}());
exports.CoffeesController = CoffeesController;
