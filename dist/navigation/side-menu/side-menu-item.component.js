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
var router_1 = require('@angular/router');
var SideMenuItemComponent = (function () {
    function SideMenuItemComponent(_router) {
        this._router = _router;
    }
    SideMenuItemComponent.prototype.ngOnInit = function () { };
    SideMenuItemComponent.prototype.onItemClicked = function (e) {
        e.preventDefault();
        if (this.item.route) {
            this._router.navigate([this.item.route]);
        }
        else if (this.item.url) {
            this._router.navigateByUrl(this.item.url);
        }
        else if (this.item.children) {
            this.expanded = !this.expanded;
            this.childrenDisplay = this.expanded ? 'block' : 'none';
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SideMenuItemComponent.prototype, "item", void 0);
    SideMenuItemComponent = __decorate([
        core_1.Component({
            selector: 'side-menu-item',
            directives: [SideMenuItemComponent],
            template: "\n      <li class=\"toggled\" [ngClass]=\"{ 'active': active, 'toggled': expanded, 'sub-menu': item.children }\" (click)=\"onItemClicked($event)\"><a href=\"\" (click)=\"$event.preventDefault()\"><i class=\"zmdi zmdi-{{item.icon}}\" *ngIf=\"item.icon\"></i>{{item.title}}</a><ul *ngIf=\"item.children\" [ngStyle]=\"{ display: childrenDisplay }\"><side-menu-item [item]=\"child\" *ngFor=\"let child of item.children\"></side-menu-item></ul></li>\n    ",
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], SideMenuItemComponent);
    return SideMenuItemComponent;
}());
exports.SideMenuItemComponent = SideMenuItemComponent;
