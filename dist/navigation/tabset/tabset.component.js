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
var common_1 = require('@angular/common');
var common_2 = require('../../common');
var TabsetComponent = (function () {
    function TabsetComponent() {
        this.clazz = true;
        this.tabs = [];
        this.classMap = {};
    }
    Object.defineProperty(TabsetComponent.prototype, "iconTab", {
        get: function () { return this._iconTab; },
        set: function (value) {
            this._iconTab = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    TabsetComponent.prototype.ngOnInit = function () {
    };
    TabsetComponent.prototype.ngOnDestroy = function () {
        this.isDestroyed = true;
    };
    TabsetComponent.prototype.addTab = function (tab) {
        this.tabs.push(tab);
        tab.active = this.tabs.length === 1 && tab.active !== false;
    };
    TabsetComponent.prototype.removeTab = function (tab) {
        var index = this.tabs.indexOf(tab);
        if (index === -1 || this.isDestroyed) {
            return;
        }
        if (tab.active && this.hasAvailableTabs(index)) {
            var newActiveIndex = this.getClosestTabIndex(index);
            this.tabs[newActiveIndex].active = true;
        }
        tab.removed.emit(tab);
        this.tabs.splice(index, 1);
    };
    TabsetComponent.prototype.getClosestTabIndex = function (index) {
        var tabsLength = this.tabs.length;
        if (!tabsLength) {
            return -1;
        }
        for (var step = 1; step <= tabsLength; step += 1) {
            var prevIndex = index - step;
            var nextIndex = index + step;
            if (this.tabs[prevIndex] && !this.tabs[prevIndex].disabled) {
                return prevIndex;
            }
            if (this.tabs[nextIndex] && !this.tabs[nextIndex].disabled) {
                return nextIndex;
            }
        }
        return -1;
    };
    TabsetComponent.prototype.hasAvailableTabs = function (index) {
        var tabsLength = this.tabs.length;
        if (!tabsLength) {
            return false;
        }
        for (var i = 0; i < tabsLength; i += 1) {
            if (!this.tabs[i].disabled && i !== index) {
                return true;
            }
        }
        return false;
    };
    TabsetComponent.prototype.setClassMap = function () {
        this.classMap = {
            'tn-icon': this.iconTab,
        };
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], TabsetComponent.prototype, "iconTab", null);
    __decorate([
        core_1.HostBinding('class.tab-container'), 
        __metadata('design:type', Boolean)
    ], TabsetComponent.prototype, "clazz", void 0);
    TabsetComponent = __decorate([
        core_1.Component({
            selector: 'tabset',
            directives: [common_1.NgClass, common_2.NgTranscludeDirective],
            template: "\n    <ul class=\"tab-nav tn-justified\" role=\"tablist\" (click)=\"$event.preventDefault()\" [ngClass]=\"classMap\"><li class=\"nav-item\" *ngFor=\"let tabz of tabs\" [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\" role=\"presentation\"><a class=\"nav-link\" href=\"\" [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\" (click)=\"tabz.active = true\"><i class=\"zmdi zmdi-{{tabz.icon}}\" *ngIf=\"tabz.icon\" [ngClass]=\"{ 'icon-tab': iconTab }\"></i><span [ngTransclude]=\"tabz.headingRef\">{{tabz.heading}}</span><span *ngIf=\"tabz.removable\"><span class=\"glyphicon glyphicon-remove-circle\" (click)=\"$event.preventDefault(); removeTab(tabz);\"></span></span></a></li></ul><div class=\"tab-content\"><ng-content></ng-content></div>\n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], TabsetComponent);
    return TabsetComponent;
}());
exports.TabsetComponent = TabsetComponent;
