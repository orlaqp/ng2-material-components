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
var AppHeaderComponent = (function () {
    function AppHeaderComponent() {
        this.sidebarOpen = false;
        this.onSidebarToggle = new core_1.EventEmitter();
    }
    AppHeaderComponent.prototype.toggleSidebar = function () {
        this.sidebarOpen = !this.sidebarOpen;
        this.onSidebarToggle.emit(this.sidebarOpen);
    };
    AppHeaderComponent.prototype.ngOnInit = function () { };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AppHeaderComponent.prototype, "color", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], AppHeaderComponent.prototype, "addMenuTrigger", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AppHeaderComponent.prototype, "logoPath", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AppHeaderComponent.prototype, "brand", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], AppHeaderComponent.prototype, "sidebarOpen", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], AppHeaderComponent.prototype, "onSidebarToggle", void 0);
    AppHeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            template: "\n      <header class=\"clearfix\" id=\"header\" [attr.data-current-skin]=\"color\"><ul class=\"header-inner\"><!-- menu trigger--><li id=\"menu-trigger\" [attr.data-trigger]=\"'#sidebar'\" *ngIf=\"addMenuTrigger\" [class.open]=\"sidebarOpen\" (click)=\"toggleSidebar()\"><div class=\"line-wrap\"><div class=\"line top\"></div><div class=\"line center\"></div><div class=\"line bottom\"></div></div></li><!-- brand--><li class=\"logo hidden-xs\" *ngIf=\"brand\"><a href=\"index.html\">{{brand}}</a></li><!-- logo--><li class=\"hidden-xs\" *ngIf=\"!brand &amp;&amp; logo\"><a class=\"m-l-10\" href=\"index.html\"><img src=\"{{logo}}\"></a></li></ul><!-- for extra content injection--><ng-content></ng-content></header>\n    ",
        }), 
        __metadata('design:paramtypes', [])
    ], AppHeaderComponent);
    return AppHeaderComponent;
}());
exports.AppHeaderComponent = AppHeaderComponent;
