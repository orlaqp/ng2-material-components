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
var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () { };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], SidebarComponent.prototype, "open", void 0);
    SidebarComponent = __decorate([
        core_1.Component({
            selector: 'sidebar',
            template: "\n      <aside class=\"sidebar c-overflow\" id=\"sidebar\" style=\"overflow: visible\" [ngClass]=\"{ 'toggled': open }\"><div id=\"mCSB_1\" tabindex=\"0\" style=\"max-height: 651px\"><div style=\"position: relative; top: 0px; left: 0px; width: 100%\" dir=\"ltr\"><ng-content></ng-content></div></div><div class=\"mCSB_scrollTools mCSB_1_scrollbar mCS-minimal-dark mCSB_scrollTools_vertical\" id=\"mCSB_1_scrollbar_vertical\" style=\"display: block\"><div class=\"mCSB_draggerContainer\"><div class=\"mCSB_dragger\" id=\"mCSB_1_dragger_vertical\" style=\"position: absolute; min-height: 50px; display: block; height: 491px; max-height: 641px\" oncontextmenu=\"return false;\"><div class=\"mCSB_dragger_bar\" style=\"line-height: 50px\"></div></div><div class=\"mCSB_draggerRail\"></div></div></div><div class=\"mCSB_scrollTools mCSB_1_scrollbar mCS-minimal-dark mCSB_scrollTools_horizontal\" id=\"mCSB_1_scrollbar_horizontal\" style=\"display: none\"><div class=\"mCSB_draggerContainer\"><div class=\"mCSB_dragger\" id=\"mCSB_1_dragger_horizontal\" style=\"position: absolute; min-width: 50px; width: 0px; left: 0px\" oncontextmenu=\"return false;\"><div class=\"mCSB_dragger_bar\"></div></div><div class=\"mCSB_draggerRail\"></div></div></div></aside>\n    ",
        }), 
        __metadata('design:paramtypes', [])
    ], SidebarComponent);
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;
