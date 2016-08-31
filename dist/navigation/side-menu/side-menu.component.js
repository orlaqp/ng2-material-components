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
var core_1 = require('@angular/core');
var side_menu_item_component_1 = require('./side-menu-item.component');
var SideMenuComponent = (function () {
    function SideMenuComponent() {
    }
    SideMenuComponent.prototype.ngOnInit = function () { };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], SideMenuComponent.prototype, "items", void 0);
    SideMenuComponent = __decorate([
        core_1.Component({
            selector: 'side-menu',
            directives: [side_menu_item_component_1.SideMenuItemComponent],
            template: "\n      <ul class=\"main-menu\"><side-menu-item *ngFor=\"let item of items\" [item]=\"item\"></side-menu-item></ul>\n    ",
        }), 
        __metadata('design:paramtypes', [])
    ], SideMenuComponent);
    return SideMenuComponent;
}());
exports.SideMenuComponent = SideMenuComponent;
