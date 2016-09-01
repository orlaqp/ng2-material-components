System.registerDynamic("ng2-materialcomponents/layout/app-header/app-header.component", ["@angular/core"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1 = $__require("@angular/core");
    var AppHeaderComponent = function () {
        function AppHeaderComponent() {
            this.sidebarOpen = false;
            this.onSidebarToggle = new core_1.EventEmitter();
        }
        AppHeaderComponent.prototype.toggleSidebar = function () {
            this.sidebarOpen = !this.sidebarOpen;
            this.onSidebarToggle.emit(this.sidebarOpen);
        };
        AppHeaderComponent.prototype.ngOnInit = function () {};
        __decorate([core_1.Input(), __metadata('design:type', String)], AppHeaderComponent.prototype, "color", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Boolean)], AppHeaderComponent.prototype, "addMenuTrigger", void 0);
        __decorate([core_1.Input(), __metadata('design:type', String)], AppHeaderComponent.prototype, "logoPath", void 0);
        __decorate([core_1.Input(), __metadata('design:type', String)], AppHeaderComponent.prototype, "brand", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Boolean)], AppHeaderComponent.prototype, "sidebarOpen", void 0);
        __decorate([core_1.Output(), __metadata('design:type', Object)], AppHeaderComponent.prototype, "onSidebarToggle", void 0);
        AppHeaderComponent = __decorate([core_1.Component({
            selector: 'app-header',
            template: "\n      <header class=\"clearfix\" id=\"header\" [attr.data-current-skin]=\"color\"><ul class=\"header-inner\"><!-- menu trigger--><li id=\"menu-trigger\" [attr.data-trigger]=\"'#sidebar'\" *ngIf=\"addMenuTrigger\" [class.open]=\"sidebarOpen\" (click)=\"toggleSidebar()\"><div class=\"line-wrap\"><div class=\"line top\"></div><div class=\"line center\"></div><div class=\"line bottom\"></div></div></li><!-- brand--><li class=\"logo hidden-xs\" *ngIf=\"brand\"><a href=\"index.html\">{{brand}}</a></li><!-- logo--><li class=\"hidden-xs\" *ngIf=\"!brand &amp;&amp; logo\"><a class=\"m-l-10\" href=\"index.html\"><img src=\"{{logo}}\"></a></li></ul><!-- for extra content injection--><ng-content></ng-content></header>\n    "
        }), __metadata('design:paramtypes', [])], AppHeaderComponent);
        return AppHeaderComponent;
    }();
    exports.AppHeaderComponent = AppHeaderComponent;
    return module.exports;
});
System.registerDynamic("ng2-materialcomponents/layout/sidebar/sidebar.component", ["@angular/core"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1 = $__require("@angular/core");
    var SidebarComponent = function () {
        function SidebarComponent() {}
        SidebarComponent.prototype.ngOnInit = function () {};
        __decorate([core_1.Input(), __metadata('design:type', Boolean)], SidebarComponent.prototype, "open", void 0);
        SidebarComponent = __decorate([core_1.Component({
            selector: 'sidebar',
            template: "\n      <aside class=\"sidebar c-overflow\" id=\"sidebar\" style=\"overflow: visible\" [ngClass]=\"{ 'toggled': open }\"><div id=\"mCSB_1\" tabindex=\"0\" style=\"max-height: 651px\"><div style=\"position: relative; top: 0px; left: 0px; width: 100%\" dir=\"ltr\"><ng-content></ng-content></div></div><div class=\"mCSB_scrollTools mCSB_1_scrollbar mCS-minimal-dark mCSB_scrollTools_vertical\" id=\"mCSB_1_scrollbar_vertical\" style=\"display: block\"><div class=\"mCSB_draggerContainer\"><div class=\"mCSB_dragger\" id=\"mCSB_1_dragger_vertical\" style=\"position: absolute; min-height: 50px; display: block; height: 491px; max-height: 641px\" oncontextmenu=\"return false;\"><div class=\"mCSB_dragger_bar\" style=\"line-height: 50px\"></div></div><div class=\"mCSB_draggerRail\"></div></div></div><div class=\"mCSB_scrollTools mCSB_1_scrollbar mCS-minimal-dark mCSB_scrollTools_horizontal\" id=\"mCSB_1_scrollbar_horizontal\" style=\"display: none\"><div class=\"mCSB_draggerContainer\"><div class=\"mCSB_dragger\" id=\"mCSB_1_dragger_horizontal\" style=\"position: absolute; min-width: 50px; width: 0px; left: 0px\" oncontextmenu=\"return false;\"><div class=\"mCSB_dragger_bar\"></div></div><div class=\"mCSB_draggerRail\"></div></div></div></aside>\n    "
        }), __metadata('design:paramtypes', [])], SidebarComponent);
        return SidebarComponent;
    }();
    exports.SidebarComponent = SidebarComponent;
    return module.exports;
});
System.registerDynamic("ng2-materialcomponents/navigation/side-menu/side-menu-item.component", ["@angular/core", "@angular/router"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1 = $__require("@angular/core");
    var router_1 = $__require("@angular/router");
    var SideMenuItemComponent = function () {
        function SideMenuItemComponent(_router) {
            this._router = _router;
        }
        SideMenuItemComponent.prototype.ngOnInit = function () {};
        SideMenuItemComponent.prototype.onItemClicked = function (e) {
            e.preventDefault();
            if (this.item.route) {
                this._router.navigate([this.item.route]);
            } else if (this.item.url) {
                this._router.navigateByUrl(this.item.url);
            } else if (this.item.children) {
                this.expanded = !this.expanded;
                this.childrenDisplay = this.expanded ? 'block' : 'none';
            }
        };
        __decorate([core_1.Input(), __metadata('design:type', Object)], SideMenuItemComponent.prototype, "item", void 0);
        SideMenuItemComponent = __decorate([core_1.Component({
            selector: 'side-menu-item',
            directives: [SideMenuItemComponent],
            template: "\n      <li class=\"toggled\" [ngClass]=\"{ 'active': active, 'toggled': expanded, 'sub-menu': item.children }\" (click)=\"onItemClicked($event)\"><a href=\"\" (click)=\"$event.preventDefault()\"><i class=\"zmdi zmdi-{{item.icon}}\" *ngIf=\"item.icon\"></i>{{item.title}}</a><ul *ngIf=\"item.children\" [ngStyle]=\"{ display: childrenDisplay }\"><side-menu-item [item]=\"child\" *ngFor=\"let child of item.children\"></side-menu-item></ul></li>\n    "
        }), __metadata('design:paramtypes', [router_1.Router])], SideMenuItemComponent);
        return SideMenuItemComponent;
    }();
    exports.SideMenuItemComponent = SideMenuItemComponent;
    return module.exports;
});
System.registerDynamic("ng2-materialcomponents/navigation/side-menu/side-menu.component", ["@angular/core", "./side-menu-item.component"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1 = $__require("@angular/core");
    var side_menu_item_component_1 = $__require("./side-menu-item.component");
    var SideMenuComponent = function () {
        function SideMenuComponent() {}
        SideMenuComponent.prototype.ngOnInit = function () {};
        __decorate([core_1.Input(), __metadata('design:type', Array)], SideMenuComponent.prototype, "items", void 0);
        SideMenuComponent = __decorate([core_1.Component({
            selector: 'side-menu',
            directives: [side_menu_item_component_1.SideMenuItemComponent],
            template: "\n      <ul class=\"main-menu\"><side-menu-item *ngFor=\"let item of items\" [item]=\"item\"></side-menu-item></ul>\n    "
        }), __metadata('design:paramtypes', [])], SideMenuComponent);
        return SideMenuComponent;
    }();
    exports.SideMenuComponent = SideMenuComponent;
    return module.exports;
});
System.registerDynamic("ng2-materialcomponents/common", ["@angular/core"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = this && this.__param || function (paramIndex, decorator) {
        return function (target, key) {
            decorator(target, key, paramIndex);
        };
    };
    var core_1 = $__require("@angular/core");
    var NgTranscludeDirective = function () {
        function NgTranscludeDirective(_viewRef) {
            this.viewRef = _viewRef;
        }
        Object.defineProperty(NgTranscludeDirective.prototype, "ngTransclude", {
            get: function () {
                return this._ngTransclude;
            },
            set: function (templateRef) {
                this._ngTransclude = templateRef;
                if (templateRef) {
                    this.viewRef.createEmbeddedView(templateRef);
                }
            },
            enumerable: true,
            configurable: true
        });
        NgTranscludeDirective = __decorate([core_1.Directive({
            selector: '[ngTransclude]',
            properties: ['ngTransclude']
        }), __param(0, core_1.Inject(core_1.ViewContainerRef)), __metadata('design:paramtypes', [core_1.ViewContainerRef])], NgTranscludeDirective);
        return NgTranscludeDirective;
    }();
    exports.NgTranscludeDirective = NgTranscludeDirective;
    return module.exports;
});
System.registerDynamic("ng2-materialcomponents/navigation/tabset/tabset.component", ["@angular/core", "@angular/common", "../../common"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1 = $__require("@angular/core");
    var common_1 = $__require("@angular/common");
    var common_2 = $__require("../../common");
    var TabsetComponent = function () {
        function TabsetComponent() {
            this.clazz = true;
            this.tabs = [];
            this.classMap = {};
        }
        Object.defineProperty(TabsetComponent.prototype, "iconTab", {
            get: function () {
                return this._iconTab;
            },
            set: function (value) {
                this._iconTab = value;
                this.setClassMap();
            },
            enumerable: true,
            configurable: true
        });
        TabsetComponent.prototype.ngOnInit = function () {};
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
                'tn-icon': this.iconTab
            };
        };
        __decorate([core_1.Input(), __metadata('design:type', Boolean)], TabsetComponent.prototype, "iconTab", null);
        __decorate([core_1.HostBinding('class.tab-container'), __metadata('design:type', Boolean)], TabsetComponent.prototype, "clazz", void 0);
        TabsetComponent = __decorate([core_1.Component({
            selector: 'tabset',
            directives: [common_1.NgClass, common_2.NgTranscludeDirective],
            template: "\n    <ul class=\"tab-nav tn-justified\" role=\"tablist\" (click)=\"$event.preventDefault()\" [ngClass]=\"classMap\"><li class=\"nav-item\" *ngFor=\"let tabz of tabs\" [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\" role=\"presentation\"><a class=\"nav-link\" href=\"\" [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\" (click)=\"tabz.active = true\"><i class=\"zmdi zmdi-{{tabz.icon}}\" *ngIf=\"tabz.icon\" [ngClass]=\"{ 'icon-tab': iconTab }\"></i><span [ngTransclude]=\"tabz.headingRef\">{{tabz.heading}}</span><span *ngIf=\"tabz.removable\"><span class=\"glyphicon glyphicon-remove-circle\" (click)=\"$event.preventDefault(); removeTab(tabz);\"></span></span></a></li></ul><div class=\"tab-content\"><ng-content></ng-content></div>\n  "
        }), __metadata('design:paramtypes', [])], TabsetComponent);
        return TabsetComponent;
    }();
    exports.TabsetComponent = TabsetComponent;
    return module.exports;
});
System.registerDynamic("ng2-materialcomponents/navigation/tab/tab.directive", ["@angular/core", "../tabset/tabset.component"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1 = $__require("@angular/core");
    var tabset_component_1 = $__require("../tabset/tabset.component");
    var TabDirective = function () {
        function TabDirective(tabset) {
            this.select = new core_1.EventEmitter(false);
            this.deselect = new core_1.EventEmitter(false);
            this.removed = new core_1.EventEmitter(false);
            this.addClass = true;
            this.tabset = tabset;
            this.tabset.addTab(this);
        }
        Object.defineProperty(TabDirective.prototype, "active", {
            get: function () {
                return this._active;
            },
            set: function (active) {
                var _this = this;
                if (this.disabled && active || !active) {
                    if (!active) {
                        this._active = active;
                    }
                    this.deselect.emit(this);
                    return;
                }
                this._active = active;
                this.select.emit(this);
                this.tabset.tabs.forEach(function (tab) {
                    if (tab !== _this) {
                        tab.active = false;
                    }
                });
            },
            enumerable: true,
            configurable: true
        });
        TabDirective.prototype.ngOnInit = function () {
            this.removable = !!this.removable;
        };
        TabDirective.prototype.ngOnDestroy = function () {
            this.tabset.removeTab(this);
        };
        __decorate([core_1.Input(), __metadata('design:type', String)], TabDirective.prototype, "heading", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Boolean)], TabDirective.prototype, "disabled", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Boolean)], TabDirective.prototype, "removable", void 0);
        __decorate([core_1.Input(), __metadata('design:type', String)], TabDirective.prototype, "icon", void 0);
        __decorate([core_1.HostBinding('class.active'), core_1.Input(), __metadata('design:type', Boolean)], TabDirective.prototype, "active", null);
        __decorate([core_1.Output(), __metadata('design:type', core_1.EventEmitter)], TabDirective.prototype, "select", void 0);
        __decorate([core_1.Output(), __metadata('design:type', core_1.EventEmitter)], TabDirective.prototype, "deselect", void 0);
        __decorate([core_1.Output(), __metadata('design:type', core_1.EventEmitter)], TabDirective.prototype, "removed", void 0);
        __decorate([core_1.HostBinding('class.tab-pane'), __metadata('design:type', Boolean)], TabDirective.prototype, "addClass", void 0);
        TabDirective = __decorate([core_1.Directive({ selector: 'tab, [tab]' }), __metadata('design:paramtypes', [tabset_component_1.TabsetComponent])], TabDirective);
        return TabDirective;
    }();
    exports.TabDirective = TabDirective;
    return module.exports;
});
System.registerDynamic("ng2-materialcomponents/navigation/tab-heading/tab-heading.directive", ["@angular/core", "../tab/tab.directive"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1 = $__require("@angular/core");
    var tab_directive_1 = $__require("../tab/tab.directive");
    var TabHeadingDirective = function () {
        function TabHeadingDirective(templateRef, tab) {
            tab.headingRef = templateRef;
        }
        TabHeadingDirective = __decorate([core_1.Directive({ selector: '[tabHeading]' }), __metadata('design:paramtypes', [core_1.TemplateRef, tab_directive_1.TabDirective])], TabHeadingDirective);
        return TabHeadingDirective;
    }();
    exports.TabHeadingDirective = TabHeadingDirective;
    return module.exports;
});
System.registerDynamic("ng2-materialcomponents/forms/checkbox/checkbox.component", ["@angular/core", "@angular/forms", "../input-base/input-base.component", "../../models/type-enum"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1 = $__require("@angular/core");
    var forms_1 = $__require("@angular/forms");
    var input_base_component_1 = $__require("../input-base/input-base.component");
    var type_enum_1 = $__require("../../models/type-enum");
    var CheckboxComponent = function (_super) {
        __extends(CheckboxComponent, _super);
        function CheckboxComponent(el) {
            _super.call(this, el);
            this.dataType = type_enum_1.TypeEnum.Boolean;
        }
        CheckboxComponent.prototype.addValidators = function () {};
        CheckboxComponent.prototype.ngOnInit = function () {
            this.onInit();
        };
        CheckboxComponent.prototype.ngOnDestroy = function () {};
        __decorate([core_1.Input(), __metadata('design:type', forms_1.FormGroupDirective)], CheckboxComponent.prototype, "fgd", void 0);
        __decorate([core_1.Input(), __metadata('design:type', String)], CheckboxComponent.prototype, "field", void 0);
        __decorate([core_1.Input(), __metadata('design:type', String)], CheckboxComponent.prototype, "label", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Boolean)], CheckboxComponent.prototype, "disabled", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Boolean)], CheckboxComponent.prototype, "value", void 0);
        CheckboxComponent = __decorate([core_1.Component({
            selector: 'checkbox',
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES, forms_1.CheckboxControlValueAccessor],
            template: "\n      <div class=\"checkbox m-b-25\"><label><input class=\"form-control\" type=\"checkbox\" [formControl]=\"control\" [attr.disabled]=\"disabled\"><i class=\"input-helper\"></i>{{label}}</label></div>\n    "
        }), __metadata('design:paramtypes', [core_1.ElementRef])], CheckboxComponent);
        return CheckboxComponent;
    }(input_base_component_1.InputBase);
    exports.CheckboxComponent = CheckboxComponent;
    return module.exports;
});
System.registerDynamic("ng2-materialcomponents/forms/email/email.component", ["@angular/core", "@angular/forms", "../input-base/input-base.component", "../validators/custom-validators"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1 = $__require("@angular/core");
    var forms_1 = $__require("@angular/forms");
    var input_base_component_1 = $__require("../input-base/input-base.component");
    var custom_validators_1 = $__require("../validators/custom-validators");
    var EmailComponent = function (_super) {
        __extends(EmailComponent, _super);
        function EmailComponent(el) {
            _super.call(this, el);
        }
        EmailComponent.prototype.addValidators = function () {
            this.validations.push({
                validator: custom_validators_1.CustomValidators.emailAddress,
                type: 'invalidEmail',
                message: "Email address is invalid"
            });
        };
        EmailComponent.prototype.ngOnInit = function () {
            this.onInit();
            if (!this.leftIcon) {
                this.leftIcon = 'email';
            }
        };
        EmailComponent.prototype.ngOnDestroy = function () {};
        __decorate([core_1.Input(), __metadata('design:type', forms_1.FormGroupDirective)], EmailComponent.prototype, "fgd", void 0);
        __decorate([core_1.Input(), __metadata('design:type', String)], EmailComponent.prototype, "placeholder", void 0);
        __decorate([core_1.Input(), __metadata('design:type', String)], EmailComponent.prototype, "field", void 0);
        __decorate([core_1.Input(), __metadata('design:type', String)], EmailComponent.prototype, "label", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Boolean)], EmailComponent.prototype, "floatingLabel", void 0);
        __decorate([core_1.Input(), __metadata('design:type', String)], EmailComponent.prototype, "leftIcon", void 0);
        __decorate([core_1.Input(), __metadata('design:type', String)], EmailComponent.prototype, "rightIcon", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Boolean)], EmailComponent.prototype, "disabled", void 0);
        __decorate([core_1.Input(), __metadata('design:type', String)], EmailComponent.prototype, "value", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Boolean)], EmailComponent.prototype, "required", void 0);
        EmailComponent = __decorate([core_1.Component({
            selector: 'email',
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES, forms_1.DefaultValueAccessor],
            template: "\n      <div class=\"input-group m-b-15 w-100\" [class.fg-float]=\"floatingLabel\" style=\"{ 'has-error': !control.valid &amp;&amp; (fgd.form.submitted || control.dirty)}\"><label *ngIf=\"label &amp;&amp; !floatingLabel\">{{label}}</label><span class=\"input-group-addon\" *ngIf=\"leftIcon\"><i class=\"zmdi zmdi-{{leftIcon}}\"></i></span><div class=\"fg-line\" [class.disabled]=\"disabled\" [class.fg-toggled]=\"toggled\"><input class=\"form-control\" #i type=\"text\" placeholder=\"{{placeholder}}\" [formControl]=\"control\" [attr.disabled]=\"disabled\" (focus)=\"onFocus(i)\" (blur)=\"onBlur(i)\"><label class=\"fg-label\" *ngIf=\"label &amp;&amp; floatingLabel\">{{label}}</label></div><span class=\"input-group-addon last\" *ngIf=\"rightIcon\"><i class=\"zmdi zmdi-{{rightIcon}}\"></i></span><div *ngIf=\"!control.valid &amp;&amp; (control.dirty || fgd.form.submitted)\"><small class=\"help-block animated fadeInDown\" *ngFor=\"let v of validations\" [class.hidden]=\"!control.errors[v.type]\">{{v.message}}</small></div></div>\n    "
        }), __metadata('design:paramtypes', [core_1.ElementRef])], EmailComponent);
        return EmailComponent;
    }(input_base_component_1.InputBase);
    exports.EmailComponent = EmailComponent;
    return module.exports;
});
System.registerDynamic('ng2-materialcomponents/forms/mask/addons/create-number-mask', [], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var dollarSign = '$';
    var emptyString = '';
    var comma = ',';
    var period = '.';
    var nonDigitsRegExp = /\D+/g;
    var number = 'number';
    var digitRegExp = /\d/;
    ;
    function createNumberMask(_a) {
        var _b = _a === void 0 ? {} : _a,
            _c = _b.prefix,
            prefix = _c === void 0 ? dollarSign : _c,
            _d = _b.suffix,
            suffix = _d === void 0 ? emptyString : _d,
            _e = _b.includeThousandsSeparator,
            includeThousandsSeparator = _e === void 0 ? true : _e,
            _f = _b.thousandsSeparatorSymbol,
            thousandsSeparatorSymbol = _f === void 0 ? comma : _f,
            _g = _b.allowDecimal,
            allowDecimal = _g === void 0 ? false : _g,
            _h = _b.decimalSymbol,
            decimalSymbol = _h === void 0 ? period : _h,
            _j = _b.decimalLimit,
            decimalLimit = _j === void 0 ? 2 : _j,
            _k = _b.requireDecimal,
            requireDecimal = _k === void 0 ? false : _k;
        function numberMask(rawValue) {
            var rawValueLength = rawValue.length;
            if (rawValue === emptyString || rawValue[0] === prefix[0] && rawValueLength === 1) {
                return prefix.split(emptyString).concat([digitRegExp.toString()]).concat(suffix.split(emptyString));
            }
            var indexOfLastDecimal = rawValue.lastIndexOf(decimalSymbol);
            var hasDecimal = indexOfLastDecimal !== -1;
            var integer;
            var fraction;
            var mask;
            if (hasDecimal && (allowDecimal || requireDecimal)) {
                integer = rawValue.slice(0, indexOfLastDecimal);
                fraction = rawValue.slice(indexOfLastDecimal + 1, rawValueLength);
                fraction = convertToMask(fraction.replace(nonDigitsRegExp, emptyString));
            } else {
                integer = rawValue;
            }
            integer = integer.replace(nonDigitsRegExp, emptyString);
            integer = includeThousandsSeparator ? addThousandsSeparator(integer, thousandsSeparatorSymbol) : integer;
            mask = convertToMask(integer);
            if (hasDecimal && allowDecimal || requireDecimal === true) {
                if (rawValue[indexOfLastDecimal - 1] !== decimalSymbol) {
                    mask.push('[]');
                }
                mask.push(decimalSymbol, '[]');
                if (fraction) {
                    if (typeof decimalLimit === number) {
                        fraction = fraction.slice(0, decimalLimit);
                    }
                    mask = mask.concat(fraction);
                } else if (requireDecimal === true) {
                    for (var i = 0; i < decimalLimit; i++) {
                        mask.push(digitRegExp);
                    }
                }
            }
            if (prefix.length > 0) {
                mask = prefix.split(emptyString).concat(mask);
            }
            if (suffix.length > 0) {
                mask = mask.concat(suffix.split(emptyString));
            }
            return mask;
        }
        numberMask.instanceOf = 'createNumberMask';
        return numberMask;
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = createNumberMask;
    function convertToMask(strNumber) {
        return strNumber.split(emptyString).map(function (char) {
            return digitRegExp.test(char) ? digitRegExp : char;
        });
    }
    function addThousandsSeparator(n, thousandsSeparatorSymbol) {
        return n.replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparatorSymbol);
    }
    return module.exports;
});
System.registerDynamic("ng2-materialcomponents/forms/number/number.component", ["@angular/core", "@angular/forms", "../input-base/input-base.component", "../../models/type-enum", "../mask/masked-input.directive", "../mask/addons/create-number-mask"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1 = $__require("@angular/core");
    var forms_1 = $__require("@angular/forms");
    var input_base_component_1 = $__require("../input-base/input-base.component");
    var type_enum_1 = $__require("../../models/type-enum");
    var masked_input_directive_1 = $__require("../mask/masked-input.directive");
    var create_number_mask_1 = $__require("../mask/addons/create-number-mask");
    var NumberComponent = function (_super) {
        __extends(NumberComponent, _super);
        function NumberComponent(el) {
            _super.call(this, el);
            this.dataType = type_enum_1.TypeEnum.Number;
        }
        NumberComponent.prototype.addValidators = function () {
            this.addMinValidation();
            this.addMaxValidation();
        };
        NumberComponent.prototype.ngOnInit = function () {
            this.onInit();
            var maskConfig = {
                allowDecimal: this.decimal,
                prefix: this.prefix || '',
                suffix: this.suffix,
                decimalLimit: this.decimalPlaces
            };
            if (this.currency && !this.prefix) {
                maskConfig.prefix = '$ ';
                maskConfig.allowDecimal = true;
                maskConfig.decimalLimit = 2;
            }
            if (this.percent) {
                maskConfig.suffix = ' %';
                maskConfig.allowDecimal = true;
                maskConfig.decimalLimit = 2;
            }
            this.numberMask = create_number_mask_1.default(maskConfig);
        };
        NumberComponent.prototype.ngOnDestroy = function () {};
        __decorate([core_1.Input(), __metadata('design:type', forms_1.FormGroupDirective)], NumberComponent.prototype, "fgd", void 0);
        __decorate([core_1.Input(), __metadata('design:type', String)], NumberComponent.prototype, "placeholder", void 0);
        __decorate([core_1.Input(), __metadata('design:type', String)], NumberComponent.prototype, "field", void 0);
        __decorate([core_1.Input(), __metadata('design:type', String)], NumberComponent.prototype, "label", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Boolean)], NumberComponent.prototype, "floatingLabel", void 0);
        __decorate([core_1.Input(), __metadata('design:type', String)], NumberComponent.prototype, "leftIcon", void 0);
        __decorate([core_1.Input(), __metadata('design:type', String)], NumberComponent.prototype, "rightIcon", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Boolean)], NumberComponent.prototype, "disabled", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Number)], NumberComponent.prototype, "value", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Boolean)], NumberComponent.prototype, "decimal", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Boolean)], NumberComponent.prototype, "currency", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Boolean)], NumberComponent.prototype, "percent", void 0);
        __decorate([core_1.Input(), __metadata('design:type', String)], NumberComponent.prototype, "prefix", void 0);
        __decorate([core_1.Input(), __metadata('design:type', String)], NumberComponent.prototype, "suffix", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Number)], NumberComponent.prototype, "decimalPlaces", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Boolean)], NumberComponent.prototype, "required", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Number)], NumberComponent.prototype, "min", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Number)], NumberComponent.prototype, "max", void 0);
        NumberComponent = __decorate([core_1.Component({
            selector: 'number',
            template: "\n      <div class=\"input-group m-b-15 w-100\" [class.fg-float]=\"floatingLabel\" style=\"{ 'has-error': !control.valid &amp;&amp; (fgd.form.submitted || control.dirty)}\"><label *ngIf=\"label &amp;&amp; !floatingLabel\">{{label}}</label><span class=\"input-group-addon\" *ngIf=\"leftIcon\"><i class=\"zmdi zmdi-{{leftIcon}}\"></i></span><div class=\"fg-line\" [class.disabled]=\"disabled\" [class.fg-toggled]=\"toggled\"><input class=\"form-control\" #i type=\"text\" [textMask]=\"{ control: control, mask: numberMask }\" placeholder=\"{{placeholder}}\" [formControl]=\"control\" [attr.disabled]=\"disabled\" (focus)=\"onFocus(i)\" (blur)=\"onBlur(i)\"><label class=\"fg-label\" *ngIf=\"label &amp;&amp; floatingLabel\">{{label}}</label></div><span class=\"input-group-addon last\" *ngIf=\"rightIcon\"><i class=\"zmdi zmdi-{{rightIcon}}\"></i></span><div *ngIf=\"!control.valid &amp;&amp; (control.dirty || fgd.form.submitted)\"><small class=\"help-block animated fadeInDown\" *ngFor=\"let v of validations\" [class.hidden]=\"!control.errors[v.type]\">{{v.message}}</small></div></div>\n    ",
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES, masked_input_directive_1.MaskedInputDirective],
            styles: ['.form-control { text-align: right; } ']
        }), __metadata('design:paramtypes', [core_1.ElementRef])], NumberComponent);
        return NumberComponent;
    }(input_base_component_1.InputBase);
    exports.NumberComponent = NumberComponent;
    return module.exports;
});
System.registerDynamic("ng2-materialcomponents/forms/password/password.component", ["@angular/core", "@angular/forms", "../input-base/input-base.component", "../validators/custom-validators"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1 = $__require("@angular/core");
    var forms_1 = $__require("@angular/forms");
    var input_base_component_1 = $__require("../input-base/input-base.component");
    var custom_validators_1 = $__require("../validators/custom-validators");
    var PasswordComponent = function (_super) {
        __extends(PasswordComponent, _super);
        function PasswordComponent(el) {
            _super.call(this, el);
        }
        PasswordComponent.prototype.addValidators = function () {
            if (this.enforceComplexity) {
                this.validations.push({
                    validator: custom_validators_1.CustomValidators.complexPassword,
                    type: 'weakPassword',
                    message: "This password is not complex enough.\n                It requires at least one of each: upper case letter,\n                lower case letter, digit and a special character.\n                Also it should be at least eight charaacters long."
                });
            } else {
                if (this.min) {
                    this.validations.push(input_base_component_1.InputBase.minValidator(this.min));
                }
                if (this.max) {
                    this.validations.push(input_base_component_1.InputBase.maxValidator(this.max));
                }
            }
        };
        PasswordComponent.prototype.ngOnInit = function () {
            this.onInit();
            if (!this.leftIcon) {
                this.leftIcon = 'key';
            }
            this._el.nativeElement.getElementsByClassName('form-control')[0].type = 'password';
        };
        PasswordComponent.prototype.ngOnDestroy = function () {};
        __decorate([core_1.Input(), __metadata('design:type', forms_1.FormGroupDirective)], PasswordComponent.prototype, "fgd", void 0);
        __decorate([core_1.Input(), __metadata('design:type', String)], PasswordComponent.prototype, "placeholder", void 0);
        __decorate([core_1.Input(), __metadata('design:type', String)], PasswordComponent.prototype, "field", void 0);
        __decorate([core_1.Input(), __metadata('design:type', String)], PasswordComponent.prototype, "label", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Boolean)], PasswordComponent.prototype, "floatingLabel", void 0);
        __decorate([core_1.Input(), __metadata('design:type', String)], PasswordComponent.prototype, "leftIcon", void 0);
        __decorate([core_1.Input(), __metadata('design:type', String)], PasswordComponent.prototype, "rightIcon", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Boolean)], PasswordComponent.prototype, "disabled", void 0);
        __decorate([core_1.Input(), __metadata('design:type', String)], PasswordComponent.prototype, "value", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Boolean)], PasswordComponent.prototype, "required", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Number)], PasswordComponent.prototype, "min", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Number)], PasswordComponent.prototype, "max", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Boolean)], PasswordComponent.prototype, "enforceComplexity", void 0);
        PasswordComponent = __decorate([core_1.Component({
            selector: 'password',
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES, forms_1.DefaultValueAccessor],
            template: "\n      <div class=\"input-group m-b-15 w-100\" [class.fg-float]=\"floatingLabel\" style=\"{ 'has-error': !control.valid &amp;&amp; (fgd.form.submitted || control.dirty)}\"><label *ngIf=\"label &amp;&amp; !floatingLabel\">{{label}}</label><span class=\"input-group-addon\" *ngIf=\"leftIcon\"><i class=\"zmdi zmdi-{{leftIcon}}\"></i></span><div class=\"fg-line\" [class.disabled]=\"disabled\" [class.fg-toggled]=\"toggled\"><input class=\"form-control\" #i type=\"text\" placeholder=\"{{placeholder}}\" [formControl]=\"control\" [attr.disabled]=\"disabled\" (focus)=\"onFocus(i)\" (blur)=\"onBlur(i)\"><label class=\"fg-label\" *ngIf=\"label &amp;&amp; floatingLabel\">{{label}}</label></div><span class=\"input-group-addon last\" *ngIf=\"rightIcon\"><i class=\"zmdi zmdi-{{rightIcon}}\"></i></span><div *ngIf=\"!control.valid &amp;&amp; (control.dirty || fgd.form.submitted)\"><small class=\"help-block animated fadeInDown\" *ngFor=\"let v of validations\" [class.hidden]=\"!control.errors[v.type]\">{{v.message}}</small></div></div>\n    "
        }), __metadata('design:paramtypes', [core_1.ElementRef])], PasswordComponent);
        return PasswordComponent;
    }(input_base_component_1.InputBase);
    exports.PasswordComponent = PasswordComponent;
    return module.exports;
});
System.registerDynamic("ng2-materialcomponents/forms/phone/phone.component", ["@angular/core", "@angular/forms", "../input-base/input-base.component"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1 = $__require("@angular/core");
    var forms_1 = $__require("@angular/forms");
    var input_base_component_1 = $__require("../input-base/input-base.component");
    var PhoneComponent = function (_super) {
        __extends(PhoneComponent, _super);
        function PhoneComponent(el) {
            _super.call(this, el);
        }
        PhoneComponent.prototype.addValidators = function () {};
        PhoneComponent.prototype.ngOnInit = function () {
            this.onInit();
            if (!this.leftIcon) {
                this.leftIcon = this.fax ? 'account-box-phone' : 'phone';
            }
        };
        PhoneComponent.prototype.ngOnDestroy = function () {};
        __decorate([core_1.Input(), __metadata('design:type', forms_1.FormGroupDirective)], PhoneComponent.prototype, "fgd", void 0);
        __decorate([core_1.Input(), __metadata('design:type', String)], PhoneComponent.prototype, "placeholder", void 0);
        __decorate([core_1.Input(), __metadata('design:type', String)], PhoneComponent.prototype, "field", void 0);
        __decorate([core_1.Input(), __metadata('design:type', String)], PhoneComponent.prototype, "label", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Boolean)], PhoneComponent.prototype, "floatingLabel", void 0);
        __decorate([core_1.Input(), __metadata('design:type', String)], PhoneComponent.prototype, "leftIcon", void 0);
        __decorate([core_1.Input(), __metadata('design:type', String)], PhoneComponent.prototype, "rightIcon", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Boolean)], PhoneComponent.prototype, "disabled", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Number)], PhoneComponent.prototype, "value", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Boolean)], PhoneComponent.prototype, "fax", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Boolean)], PhoneComponent.prototype, "required", void 0);
        PhoneComponent = __decorate([core_1.Component({
            selector: 'phone',
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES, forms_1.DefaultValueAccessor],
            template: "\n      <div class=\"input-group m-b-15 w-100\" [class.fg-float]=\"floatingLabel\" style=\"{ 'has-error': !control.valid &amp;&amp; (fgd.form.submitted || control.dirty)}\"><label *ngIf=\"label &amp;&amp; !floatingLabel\">{{label}}</label><span class=\"input-group-addon\" *ngIf=\"leftIcon\"><i class=\"zmdi zmdi-{{leftIcon}}\"></i></span><div class=\"fg-line\" [class.disabled]=\"disabled\" [class.fg-toggled]=\"toggled\"><input class=\"form-control\" #i type=\"text\" placeholder=\"{{placeholder}}\" [formControl]=\"control\" [attr.disabled]=\"disabled\" (focus)=\"onFocus(i)\" (blur)=\"onBlur(i)\"><label class=\"fg-label\" *ngIf=\"label &amp;&amp; floatingLabel\">{{label}}</label></div><span class=\"input-group-addon last\" *ngIf=\"rightIcon\"><i class=\"zmdi zmdi-{{rightIcon}}\"></i></span><div *ngIf=\"!control.valid &amp;&amp; (control.dirty || fgd.form.submitted)\"><small class=\"help-block animated fadeInDown\" *ngFor=\"let v of validations\" [class.hidden]=\"!control.errors[v.type]\">{{v.message}}</small></div></div>\n    ",
            styles: ['.form-control { text-align: right; } ']
        }), __metadata('design:paramtypes', [core_1.ElementRef])], PhoneComponent);
        return PhoneComponent;
    }(input_base_component_1.InputBase);
    exports.PhoneComponent = PhoneComponent;
    return module.exports;
});
System.registerDynamic("ng2-materialcomponents/forms/radio/radio-group.component", ["@angular/core", "@angular/forms", "../input-base/input-base.component", "./radio.component"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1 = $__require("@angular/core");
    var forms_1 = $__require("@angular/forms");
    var input_base_component_1 = $__require("../input-base/input-base.component");
    var radio_component_1 = $__require("./radio.component");
    var RadioGroupComponent = function (_super) {
        __extends(RadioGroupComponent, _super);
        function RadioGroupComponent(el) {
            _super.call(this, el);
            this.disabled = false;
        }
        RadioGroupComponent.prototype.ngOnInit = function () {
            this.onInit();
        };
        RadioGroupComponent.prototype.addValidators = function () {};
        __decorate([core_1.Input(), __metadata('design:type', forms_1.FormGroupDirective)], RadioGroupComponent.prototype, "fgd", void 0);
        __decorate([core_1.Input(), __metadata('design:type', String)], RadioGroupComponent.prototype, "field", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Boolean)], RadioGroupComponent.prototype, "disabled", void 0);
        __decorate([core_1.Input(), __metadata('design:type', String)], RadioGroupComponent.prototype, "defaultValue", void 0);
        RadioGroupComponent = __decorate([core_1.Component({
            selector: 'radio-group',
            directives: [radio_component_1.RadioComponent],
            template: "\n      <div class=\"radio-group\"><ng-content></ng-content></div>\n    "
        }), __metadata('design:paramtypes', [core_1.ElementRef])], RadioGroupComponent);
        return RadioGroupComponent;
    }(input_base_component_1.InputBase);
    exports.RadioGroupComponent = RadioGroupComponent;
    return module.exports;
});
System.registerDynamic("ng2-materialcomponents/forms/radio/radio.component", ["@angular/core", "@angular/forms", "./radio-group.component"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = this && this.__param || function (paramIndex, decorator) {
        return function (target, key) {
            decorator(target, key, paramIndex);
        };
    };
    var core_1 = $__require("@angular/core");
    var forms_1 = $__require("@angular/forms");
    var radio_group_component_1 = $__require("./radio-group.component");
    var RadioComponent = function () {
        function RadioComponent(el, radioGroup) {
            this.el = el;
            this.radioGroup = radioGroup;
        }
        Object.defineProperty(RadioComponent.prototype, "groupName", {
            get: function () {
                return this.radioGroup.field.replace('.', '_');
            },
            enumerable: true,
            configurable: true
        });
        RadioComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            if (this.radioGroup.defaultValue === this.value) {
                this.el.nativeElement.getElementsByTagName('input')[0].checked = true;
                setTimeout(function () {
                    _this._updateValue();
                }, 0);
            }
        };
        RadioComponent.prototype.check = function () {
            this._updateValue();
        };
        RadioComponent.prototype._updateValue = function () {
            this.radioGroup.control.updateValue(this.value);
        };
        __decorate([core_1.Input(), __metadata('design:type', forms_1.FormGroupDirective)], RadioComponent.prototype, "fgd", void 0);
        __decorate([core_1.Input(), __metadata('design:type', String)], RadioComponent.prototype, "field", void 0);
        __decorate([core_1.Input(), __metadata('design:type', String)], RadioComponent.prototype, "label", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Boolean)], RadioComponent.prototype, "disabled", void 0);
        __decorate([core_1.Input(), __metadata('design:type', String)], RadioComponent.prototype, "nane", void 0);
        __decorate([core_1.Input(), __metadata('design:type', String)], RadioComponent.prototype, "value", void 0);
        RadioComponent = __decorate([core_1.Component({
            selector: 'radio',
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES],
            template: "\n      <div class=\"radio m-b-15\" [class.disabled]=\"disabled\"><label><input type=\"radio\" name=\"{{groupName}}\" [attr.disabled]=\"disabled\" [attr.value]=\"value\" (click)=\"check()\"><i class=\"input-helper\"></i>{{label}}</label></div>\n    "
        }), __param(1, core_1.Host()), __param(1, core_1.Inject(core_1.forwardRef(function () {
            return radio_group_component_1.RadioGroupComponent;
        }))), __metadata('design:paramtypes', [core_1.ElementRef, radio_group_component_1.RadioGroupComponent])], RadioComponent);
        return RadioComponent;
    }();
    exports.RadioComponent = RadioComponent;
    return module.exports;
});
System.registerDynamic("ng2-materialcomponents/forms/select-picker/select-picker.component", ["@angular/core", "@angular/forms", "../input-base/input-base.component"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1 = $__require("@angular/core");
    var forms_1 = $__require("@angular/forms");
    var input_base_component_1 = $__require("../input-base/input-base.component");
    var SelectPickerComponent = function (_super) {
        __extends(SelectPickerComponent, _super);
        function SelectPickerComponent(el) {
            _super.call(this, el);
            this.el = el;
            this.liveSearch = true;
            this.allowMultiSelection = false;
        }
        SelectPickerComponent.prototype.ngOnInit = function () {
            this.onInit();
        };
        SelectPickerComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            setTimeout(function () {
                return $(_this.el.nativeElement).find('.my-selectpicker').selectpicker({
                    liveSearch: _this.liveSearch
                });
            }, 0);
        };
        SelectPickerComponent.prototype.addValidators = function () {};
        __decorate([core_1.Input(), __metadata('design:type', forms_1.FormGroupDirective)], SelectPickerComponent.prototype, "fgd", void 0);
        __decorate([core_1.Input(), __metadata('design:type', String)], SelectPickerComponent.prototype, "field", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Boolean)], SelectPickerComponent.prototype, "disabled", void 0);
        __decorate([core_1.Input(), __metadata('design:type', String)], SelectPickerComponent.prototype, "placeholder", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Array)], SelectPickerComponent.prototype, "items", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Boolean)], SelectPickerComponent.prototype, "liveSearch", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Boolean)], SelectPickerComponent.prototype, "allowMultiSelection", void 0);
        SelectPickerComponent = __decorate([core_1.Component({
            selector: 'select-picker',
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES, forms_1.SelectControlValueAccessor],
            template: "\n      <select class=\"my-selectpicker\" style=\"display: none\" [attr.multiple]=\"allowMultiSelection ? true : null\" [formControl]=\"control\"><option *ngFor=\"let item of items\" value=\"{{item.id}}\">{{item.title}}</option></select>\n    "
        }), __metadata('design:paramtypes', [core_1.ElementRef])], SelectPickerComponent);
        return SelectPickerComponent;
    }(input_base_component_1.InputBase);
    exports.SelectPickerComponent = SelectPickerComponent;
    return module.exports;
});
System.registerDynamic("ng2-materialcomponents/forms/text-box/text-box.component", ["@angular/core", "@angular/forms", "../input-base/input-base.component"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1 = $__require("@angular/core");
    var forms_1 = $__require("@angular/forms");
    var input_base_component_1 = $__require("../input-base/input-base.component");
    var TextBoxComponent = function (_super) {
        __extends(TextBoxComponent, _super);
        function TextBoxComponent(el) {
            _super.call(this, el);
        }
        TextBoxComponent.prototype.addValidators = function () {
            if (this.min) {
                this.validations.push(input_base_component_1.InputBase.minValidator(this.min));
            }
            if (this.max) {
                this.validations.push(input_base_component_1.InputBase.maxValidator(this.max));
            }
        };
        TextBoxComponent.prototype.ngOnInit = function () {
            this.onInit();
        };
        TextBoxComponent.prototype.ngOnDestroy = function () {};
        __decorate([core_1.Input(), __metadata('design:type', forms_1.FormGroupDirective)], TextBoxComponent.prototype, "fgd", void 0);
        __decorate([core_1.Input(), __metadata('design:type', String)], TextBoxComponent.prototype, "placeholder", void 0);
        __decorate([core_1.Input(), __metadata('design:type', String)], TextBoxComponent.prototype, "field", void 0);
        __decorate([core_1.Input(), __metadata('design:type', String)], TextBoxComponent.prototype, "label", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Boolean)], TextBoxComponent.prototype, "floatingLabel", void 0);
        __decorate([core_1.Input(), __metadata('design:type', String)], TextBoxComponent.prototype, "leftIcon", void 0);
        __decorate([core_1.Input(), __metadata('design:type', String)], TextBoxComponent.prototype, "rightIcon", void 0);
        __decorate([core_1.Input(), __metadata('design:type', String)], TextBoxComponent.prototype, "value", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Boolean)], TextBoxComponent.prototype, "disabled", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Boolean)], TextBoxComponent.prototype, "required", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Number)], TextBoxComponent.prototype, "min", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Number)], TextBoxComponent.prototype, "max", void 0);
        TextBoxComponent = __decorate([core_1.Component({
            selector: 'text-box',
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES, forms_1.DefaultValueAccessor],
            template: "\n      <div class=\"input-group m-b-15 w-100\" [class.fg-float]=\"floatingLabel\" style=\"{ 'has-error': !control.valid &amp;&amp; (fgd.form.submitted || control.dirty)}\"><label *ngIf=\"label &amp;&amp; !floatingLabel\">{{label}}</label><span class=\"input-group-addon\" *ngIf=\"leftIcon\"><i class=\"zmdi zmdi-{{leftIcon}}\"></i></span><div class=\"fg-line\" [class.disabled]=\"disabled\" [class.fg-toggled]=\"toggled\"><input class=\"form-control\" #i type=\"text\" placeholder=\"{{placeholder}}\" [formControl]=\"control\" [attr.disabled]=\"disabled\" (focus)=\"onFocus(i)\" (blur)=\"onBlur(i)\"><label class=\"fg-label\" *ngIf=\"label &amp;&amp; floatingLabel\">{{label}}</label></div><span class=\"input-group-addon last\" *ngIf=\"rightIcon\"><i class=\"zmdi zmdi-{{rightIcon}}\"></i></span><div *ngIf=\"!control.valid &amp;&amp; (control.dirty || fgd.form.submitted)\"><small class=\"help-block animated fadeInDown\" *ngFor=\"let v of validations\" [class.hidden]=\"!control.errors[v.type]\">{{v.message}}</small></div></div>\n    "
        }), __metadata('design:paramtypes', [core_1.ElementRef])], TextBoxComponent);
        return TextBoxComponent;
    }(input_base_component_1.InputBase);
    exports.TextBoxComponent = TextBoxComponent;
    return module.exports;
});
System.registerDynamic('ng2-materialcomponents/forms/text-area/autosize', [], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var set = typeof Set === 'function' ? new Set() : function () {
        var list = [];
        return {
            has: function (key) {
                return Boolean(list.indexOf(key) > -1);
            },
            add: function (key) {
                list.push(key);
            },
            delete: function (key) {
                list.splice(list.indexOf(key), 1);
            }
        };
    }();
    var createEvent = function (name) {
        return new Event(name);
    };
    try {
        new Event('test');
    } catch (e) {
        createEvent = function (name) {
            var evt = document.createEvent('Event');
            evt.initEvent(name, true, false);
            return evt;
        };
    }
    function assign(ta, options) {
        if (!ta || !ta.nodeName || ta.nodeName !== 'TEXTAREA' || set.has(ta)) return;
        var heightOffset = null;
        var clientWidth = ta.clientWidth;
        var cachedHeight = null;
        function init() {
            var style = window.getComputedStyle(ta, null);
            if (style.resize === 'vertical') {
                ta.style.resize = 'none';
            } else if (style.resize === 'both') {
                ta.style.resize = 'horizontal';
            }
            if (style.boxSizing === 'content-box') {
                heightOffset = -(parseFloat(style.paddingTop) + parseFloat(style.paddingBottom));
            } else {
                heightOffset = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
            }
            if (isNaN(heightOffset)) {
                heightOffset = 0;
            }
            update();
        }
        function changeOverflow(value) {
            {
                var width = ta.style.width;
                ta.style.width = '0px';
                ta.offsetWidth;
                ta.style.width = width;
            }
            ta.style.overflowY = value;
            resize();
        }
        function getParentOverflows(el) {
            var arr = [];
            while (el && el.parentNode && el.parentNode instanceof Element) {
                if (el.parentNode.scrollTop) {
                    arr.push({
                        node: el.parentNode,
                        scrollTop: el.parentNode.scrollTop
                    });
                }
                el = el.parentNode;
            }
            return arr;
        }
        function resize() {
            var originalHeight = ta.style.height;
            var overflows = getParentOverflows(ta);
            var docTop = document.documentElement && document.documentElement.scrollTop;
            ta.style.height = 'auto';
            var endHeight = ta.scrollHeight + heightOffset;
            if (ta.scrollHeight === 0) {
                ta.style.height = originalHeight;
                return;
            }
            ta.style.height = endHeight + 'px';
            clientWidth = ta.clientWidth;
            overflows.forEach(function (el) {
                el.node.scrollTop = el.scrollTop;
            });
            if (docTop) {
                document.documentElement.scrollTop = docTop;
            }
        }
        function update() {
            resize();
            var computed = window.getComputedStyle(ta, null);
            var computedHeight = Math.round(parseFloat(computed.height));
            var styleHeight = Math.round(parseFloat(ta.style.height));
            if (computedHeight !== styleHeight) {
                if (computed.overflowY !== 'visible') {
                    changeOverflow('visible');
                }
            } else {
                if (computed.overflowY !== 'hidden') {
                    changeOverflow('hidden');
                }
            }
            if (cachedHeight !== computedHeight) {
                cachedHeight = computedHeight;
                var evt = createEvent('autosize:resized');
                ta.dispatchEvent(evt);
            }
        }
        var pageResize = function () {
            if (ta.clientWidth !== clientWidth) {
                update();
            }
        };
        var destroy = function (style) {
            window.removeEventListener('resize', pageResize, false);
            ta.removeEventListener('input', update, false);
            ta.removeEventListener('keyup', update, false);
            ta.removeEventListener('autosize:destroy', destroy, false);
            ta.removeEventListener('autosize:update', update, false);
            set.delete(ta);
            Object.keys(style).forEach(function (key) {
                ta.style[key] = style[key];
            });
        };
        destroy.bind(ta, {
            height: ta.style.height,
            resize: ta.style.resize,
            overflowY: ta.style.overflowY,
            overflowX: ta.style.overflowX,
            wordWrap: ta.style.wordWrap
        });
        ta.addEventListener('autosize:destroy', destroy, false);
        if ('onpropertychange' in ta && 'oninput' in ta) {
            ta.addEventListener('keyup', update, false);
        }
        window.addEventListener('resize', pageResize, false);
        ta.addEventListener('input', update, false);
        ta.addEventListener('autosize:update', update, false);
        set.add(ta);
        ta.style.overflowX = 'hidden';
        ta.style.wordWrap = 'break-word';
        init();
    }
    function destroy(ta) {
        if (!(ta && ta.nodeName && ta.nodeName === 'TEXTAREA')) return;
        var evt = createEvent('autosize:destroy');
        ta.dispatchEvent(evt);
    }
    function update(ta) {
        if (!(ta && ta.nodeName && ta.nodeName === 'TEXTAREA')) return;
        var evt = createEvent('autosize:update');
        ta.dispatchEvent(evt);
    }
    var autosize = null;
    if (typeof window === 'undefined' || typeof window.getComputedStyle !== 'function') {
        autosize = function (el) {
            return el;
        };
        autosize.destroy = function (el) {
            return el;
        };
        autosize.update = function (el) {
            return el;
        };
    } else {
        autosize = function (el, options) {
            if (el) {
                Array.prototype.forEach.call(el.length ? el : [el], function (x) {
                    return assign(x, options);
                });
            }
            return el;
        };
        autosize.destroy = function (el) {
            if (el) {
                Array.prototype.forEach.call(el.length ? el : [el], destroy);
            }
            return el;
        };
        autosize.update = function (el) {
            if (el) {
                Array.prototype.forEach.call(el.length ? el : [el], update);
            }
            return el;
        };
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = autosize;
    return module.exports;
});
System.registerDynamic("ng2-materialcomponents/forms/text-area/text-area.component", ["@angular/core", "@angular/forms", "../input-base/input-base.component", "./autosize"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1 = $__require("@angular/core");
    var forms_1 = $__require("@angular/forms");
    var input_base_component_1 = $__require("../input-base/input-base.component");
    var autosize_1 = $__require("./autosize");
    var TextAreaComponent = function (_super) {
        __extends(TextAreaComponent, _super);
        function TextAreaComponent(el) {
            _super.call(this, el);
            this.autosize = true;
            this.rows = 3;
        }
        TextAreaComponent.prototype.addValidators = function () {
            if (this.min) {
                this.validations.push(input_base_component_1.InputBase.minValidator(this.min));
            }
            if (this.max) {
                this.validations.push(input_base_component_1.InputBase.maxValidator(this.max));
            }
        };
        TextAreaComponent.prototype.ngOnInit = function () {
            this.onInit();
            if (this.autosize) {
                autosize_1.default(this._el.nativeElement.getElementsByClassName('form-control'));
            }
        };
        TextAreaComponent.prototype.ngOnDestroy = function () {};
        __decorate([core_1.Input(), __metadata('design:type', forms_1.FormGroupDirective)], TextAreaComponent.prototype, "fgd", void 0);
        __decorate([core_1.Input(), __metadata('design:type', String)], TextAreaComponent.prototype, "placeholder", void 0);
        __decorate([core_1.Input(), __metadata('design:type', String)], TextAreaComponent.prototype, "field", void 0);
        __decorate([core_1.Input(), __metadata('design:type', String)], TextAreaComponent.prototype, "label", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Boolean)], TextAreaComponent.prototype, "floatingLabel", void 0);
        __decorate([core_1.Input(), __metadata('design:type', String)], TextAreaComponent.prototype, "leftIcon", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Boolean)], TextAreaComponent.prototype, "disabled", void 0);
        __decorate([core_1.Input(), __metadata('design:type', String)], TextAreaComponent.prototype, "value", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Boolean)], TextAreaComponent.prototype, "required", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Number)], TextAreaComponent.prototype, "min", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Number)], TextAreaComponent.prototype, "max", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Boolean)], TextAreaComponent.prototype, "autosize", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Number)], TextAreaComponent.prototype, "rows", void 0);
        TextAreaComponent = __decorate([core_1.Component({
            selector: 'text-area',
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES, forms_1.DefaultValueAccessor],
            template: "\n      <div class=\"form-group m-b-25 w-100\" [ngClass]=\"{ 'has-error': !control.valid &amp;&amp; (fgd.form.submitted || control.dirty)}\"><label *ngIf=\"label\">{{label}}</label><div class=\"fg-line\" [class.disabled]=\"disabled\" [class.fg-toggled]=\"toggled\"><textarea class=\"form-control auto-size\" #i [attr.disabled]=\"disabled\" placeholder=\"{{placeholder}}\" [formControl]=\"control\" (focus)=\"onFocus(i)\" (blur)=\"onBlur(i)\" [attr.rows]=\"rows\"></textarea></div><div *ngIf=\"!control.valid &amp;&amp; (control.dirty || fgd.form.submitted)\"><small class=\"help-block animated fadeInDown\" *ngFor=\"let v of validations\" [class.hidden]=\"!control.errors[v.type]\">{{v.message}}</small></div></div>\n    "
        }), __metadata('design:paramtypes', [core_1.ElementRef])], TextAreaComponent);
        return TextAreaComponent;
    }(input_base_component_1.InputBase);
    exports.TextAreaComponent = TextAreaComponent;
    return module.exports;
});
System.registerDynamic('ng2-materialcomponents/utils/utilities', [], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    function guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }
    exports.guid = guid;
    return module.exports;
});
System.registerDynamic("ng2-materialcomponents/forms/toggle/toggle.component", ["@angular/core", "@angular/forms", "../input-base/input-base.component", "../../utils/utilities"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1 = $__require("@angular/core");
    var forms_1 = $__require("@angular/forms");
    var input_base_component_1 = $__require("../input-base/input-base.component");
    var utilities_1 = $__require("../../utils/utilities");
    var ToggleComponent = function (_super) {
        __extends(ToggleComponent, _super);
        function ToggleComponent(el) {
            _super.call(this, el);
            this.color = '';
        }
        ToggleComponent.prototype.addValidators = function () {};
        ToggleComponent.prototype.ngOnInit = function () {
            this.onInit();
            this.identifier = utilities_1.guid();
        };
        ToggleComponent.prototype.ngOnDestroy = function () {};
        __decorate([core_1.Input(), __metadata('design:type', forms_1.FormGroupDirective)], ToggleComponent.prototype, "fgd", void 0);
        __decorate([core_1.Input(), __metadata('design:type', String)], ToggleComponent.prototype, "placeholder", void 0);
        __decorate([core_1.Input(), __metadata('design:type', String)], ToggleComponent.prototype, "field", void 0);
        __decorate([core_1.Input(), __metadata('design:type', String)], ToggleComponent.prototype, "label", void 0);
        __decorate([core_1.Input(), __metadata('design:type', String)], ToggleComponent.prototype, "value", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Boolean)], ToggleComponent.prototype, "disabled", void 0);
        __decorate([core_1.Input(), __metadata('design:type', String)], ToggleComponent.prototype, "color", void 0);
        ToggleComponent = __decorate([core_1.Component({
            selector: 'toggle',
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES, forms_1.DefaultValueAccessor],
            template: "\n      <div class=\"toggle-switch\" [class.disabled]=\"disabled\" [attr.data-ts-color]=\"color\"><label class=\"ts-label\" [attr.for]=\"identifier\">{{label}}</label><input [attr.id]=\"identifier\" type=\"checkbox\" hidden=\"hidden\" [attr.disabled]=\"disabled\" [formControl]=\"control\"><label class=\"ts-helper\" [attr.for]=\"identifier\"></label></div>\n    "
        }), __metadata('design:paramtypes', [core_1.ElementRef])], ToggleComponent);
        return ToggleComponent;
    }(input_base_component_1.InputBase);
    exports.ToggleComponent = ToggleComponent;
    return module.exports;
});
System.registerDynamic("ng2-materialcomponents/models/submitable-form-group", ["@angular/forms"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var forms_1 = $__require("@angular/forms");
    var SubmitableFormGroup = function (_super) {
        __extends(SubmitableFormGroup, _super);
        function SubmitableFormGroup(args) {
            _super.call(this, args);
        }
        Object.defineProperty(SubmitableFormGroup.prototype, "submitted", {
            get: function () {
                return this._submitted;
            },
            enumerable: true,
            configurable: true
        });
        SubmitableFormGroup.prototype.markAsSubmitted = function () {
            this._submitted = true;
        };
        SubmitableFormGroup.prototype.getValue = function () {
            var value = {};
            var keys = Object.keys(this.controls);
            var controls = this.controls;
            keys.forEach(function (key) {
                var result = controls[key].value;
                if (result) {
                    value[key] = result;
                }
            });
            return value;
        };
        return SubmitableFormGroup;
    }(forms_1.FormGroup);
    exports.SubmitableFormGroup = SubmitableFormGroup;
    return module.exports;
});
System.registerDynamic('ng2-materialcomponents/models/control-with-type', ['@angular/forms', './type-enum'], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var forms_1 = $__require('@angular/forms');
    var type_enum_1 = $__require('./type-enum');
    var ControlWithType = function (_super) {
        __extends(ControlWithType, _super);
        function ControlWithType(dataType, value, validator, asyncValidator) {
            if (value === void 0) {
                value = null;
            }
            if (validator === void 0) {
                validator = null;
            }
            if (asyncValidator === void 0) {
                asyncValidator = null;
            }
            _super.call(this, value, validator, asyncValidator);
            this.dataType = dataType;
        }
        ControlWithType.prototype.getValue = function (mandatory) {
            var value;
            switch (this.dataType) {
                case type_enum_1.TypeEnum.String:
                    value = this.value;
                    break;
                case type_enum_1.TypeEnum.Number:
                    value = Number(this.value.replace(',', ''));
                    break;
                case type_enum_1.TypeEnum.Date:
                    break;
                case type_enum_1.TypeEnum.Boolean:
                    value = Boolean(this.value);
                    break;
                default:
                    value = this.value;
            }
            return mandatory || value ? value : undefined;
        };
        return ControlWithType;
    }(forms_1.FormControl);
    exports.ControlWithType = ControlWithType;
    return module.exports;
});
System.registerDynamic("ng2-materialcomponents/models/type-enum", [], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["String"] = 0] = "String";
        TypeEnum[TypeEnum["Number"] = 1] = "Number";
        TypeEnum[TypeEnum["Date"] = 2] = "Date";
        TypeEnum[TypeEnum["Boolean"] = 3] = "Boolean";
    })(exports.TypeEnum || (exports.TypeEnum = {}));
    var TypeEnum = exports.TypeEnum;
    return module.exports;
});
System.registerDynamic('ng2-materialcomponents/forms/validators/custom-validators', [], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    function processNumber(control) {
        'use strict';

        if (control.value.trim() === '') {
            return NaN;
        }
        var val = control.value.replace(',', '');
        if (val.length > 2 && control.__isDecimal) {
            val = val.replace('.', '');
            var num = val.substring(0, val.length - 2);
            var dec = val.substring(val.length - 2, val.length);
            val = num + "." + dec;
        }
        return +val;
    }
    var CustomValidators = function () {
        function CustomValidators() {}
        CustomValidators.emailAddress = function (control) {
            if (control.value.trim() === '') {
                return null;
            }
            var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
            if (!EMAIL_REGEXP.test(control.value)) {
                return { invalidEmail: true };
            }
            return null;
        };
        CustomValidators.complexPassword = function (control) {
            if (control.value.trim() === '') {
                return null;
            }
            var regExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()]).{8,}/;
            var validPassword = regExp.test(control.value);
            if (!validPassword) {
                return { weakPassword: true };
            }
            return null;
        };
        CustomValidators.minNumber = function (min) {
            return function (control) {
                var value = processNumber(control);
                if (isNaN(value)) {
                    return null;
                }
                if (value < min) {
                    return { tooLow: true };
                }
                return null;
            };
        };
        CustomValidators.maxNumber = function (max) {
            return function (control) {
                var value = processNumber(control);
                if (isNaN(value)) {
                    return null;
                }
                if (value > max) {
                    return { tooHigh: true };
                }
                return null;
            };
        };
        return CustomValidators;
    }();
    exports.CustomValidators = CustomValidators;
    return module.exports;
});
System.registerDynamic('ng2-materialcomponents/forms/input-base/input-base.component', ['@angular/forms', '../../models/submitable-form-group', '../../models/control-with-type', '../../models/type-enum', '../validators/custom-validators'], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var forms_1 = $__require('@angular/forms');
    var submitable_form_group_1 = $__require('../../models/submitable-form-group');
    var control_with_type_1 = $__require('../../models/control-with-type');
    var type_enum_1 = $__require('../../models/type-enum');
    var custom_validators_1 = $__require('../validators/custom-validators');
    var InputBase = function () {
        function InputBase(el) {
            this._el = el;
            this.validations = [];
            this.dataType = type_enum_1.TypeEnum.String;
        }
        InputBase.minValidator = function (length) {
            return {
                validator: forms_1.Validators.minLength(length),
                type: 'minlength',
                message: "At least " + length + " characters are required"
            };
        };
        InputBase.maxValidator = function (length) {
            return {
                validator: forms_1.Validators.maxLength(length),
                type: 'maxlength',
                message: "No more than " + length + " characters are allowed"
            };
        };
        InputBase.prototype.onFocus = function (ele) {
            this.toggled = true;
        };
        InputBase.prototype.onBlur = function (ele) {
            if (!this.control.value) {
                this.toggled = false;
            }
        };
        InputBase.prototype.addValidators = function () {
            throw 'Validators should be defined at the derived class';
        };
        InputBase.prototype.addMinValidation = function () {
            if (this.min) {
                this.validations.push({
                    validator: custom_validators_1.CustomValidators.minNumber(this.min),
                    type: 'tooLow',
                    message: "Minimum aceptable value is " + this.min
                });
            }
        };
        InputBase.prototype.addMaxValidation = function () {
            if (this.max) {
                this.validations.push({
                    validator: custom_validators_1.CustomValidators.maxNumber(this.max),
                    type: 'tooHigh',
                    message: "Maximum aceptable value is " + this.max
                });
            }
        };
        InputBase.prototype.onInit = function () {
            if (this.floatingLabel === undefined) {
                this.floatingLabel = true;
            }
            this._processControl(this.field);
            if (this.control.value) {
                this.toggled = true;
            }
        };
        InputBase.prototype._getValidators = function () {
            this.addValidators();
            if (this.required) {
                this.validations.push({
                    validator: forms_1.Validators.required,
                    type: 'required',
                    message: 'This field is required'
                });
            }
            var validators = [];
            if (this.validations.length > 0) {
                this.validations.forEach(function (item) {
                    return validators.push(item.validator);
                });
            }
            return validators;
        };
        InputBase.prototype._processControl = function (field) {
            var that = this;
            var pathTokens = field.split('.');
            var fieldName = pathTokens.pop();
            var fgd = that.fgd;
            var fg = fgd.form;
            pathTokens.forEach(function (token) {
                if (!fgd.control.controls[token]) {
                    fgd.control.addControl(token, new submitable_form_group_1.SubmitableFormGroup({}));
                }
                fg = fgd.control.controls[token];
            });
            if (!this.value) {
                this.value = '';
            }
            var validators = this._getValidators();
            this.control = new control_with_type_1.ControlWithType(this.dataType, this.value, forms_1.Validators.compose(validators));
            this.control.__isDecimal = this.decimal;
            fg.addControl(fieldName, this.control);
        };
        return InputBase;
    }();
    exports.InputBase = InputBase;
    return module.exports;
});
System.registerDynamic("ng2-materialcomponents/forms/date-time-picker/date-time-picker.component", ["@angular/core", "@angular/forms", "../input-base/input-base.component"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1 = $__require("@angular/core");
    var forms_1 = $__require("@angular/forms");
    var input_base_component_1 = $__require("../input-base/input-base.component");
    var DateTimePickerComponent = function (_super) {
        __extends(DateTimePickerComponent, _super);
        function DateTimePickerComponent(el) {
            _super.call(this, el);
            this.el = el;
            this.format = 'MM/DD/YYYY hh:mm:ss A';
        }
        DateTimePickerComponent.prototype.addValidators = function () {};
        DateTimePickerComponent.prototype.ngOnInit = function () {
            this.onInit();
        };
        DateTimePickerComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            var options = this._getOptions();
            var ele = $(this.el.nativeElement).find('.date-time-picker');
            ele.datetimepicker(options).on('dp.change', function (data) {
                var d = data.date;
                _this.control.updateValue(_this._dateFormatted(d));
            });
        };
        DateTimePickerComponent.prototype._getOptions = function () {
            var options = {
                icons: {
                    time: 'zmdi zmdi-time',
                    date: 'zmdi zmdi-calendar',
                    up: 'zmdi zmdi-chevron-up',
                    down: 'zmdi zmdi-chevron-down',
                    previous: 'zmdi zmdi-chevron-left',
                    next: 'zmdi zmdi-chevron-right',
                    today: 'zmdi zmdi-check',
                    clear: 'zmdi zmdi-delete',
                    close: 'zmdi zmdi-close'
                }
            };
            Object.assign(options, {
                format: this.format,
                minDate: this.minDate,
                maxDate: this.maxDate,
                disabledDates: this.disabledDates,
                enabledDates: this.enabledDates,
                sideBySide: this.sideBySide,
                inline: this.inline
            });
            return options;
        };
        DateTimePickerComponent.prototype._dateFormatted = function (d) {
            return d.format(this.format);
        };
        __decorate([core_1.Input(), __metadata('design:type', forms_1.FormGroupDirective)], DateTimePickerComponent.prototype, "fgd", void 0);
        __decorate([core_1.Input(), __metadata('design:type', String)], DateTimePickerComponent.prototype, "placeholder", void 0);
        __decorate([core_1.Input(), __metadata('design:type', String)], DateTimePickerComponent.prototype, "field", void 0);
        __decorate([core_1.Input(), __metadata('design:type', String)], DateTimePickerComponent.prototype, "label", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Boolean)], DateTimePickerComponent.prototype, "floatingLabel", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Boolean)], DateTimePickerComponent.prototype, "disabled", void 0);
        __decorate([core_1.Input(), __metadata('design:type', String)], DateTimePickerComponent.prototype, "format", void 0);
        __decorate([core_1.Input(), __metadata('design:type', String)], DateTimePickerComponent.prototype, "minDate", void 0);
        __decorate([core_1.Input(), __metadata('design:type', String)], DateTimePickerComponent.prototype, "maxDate", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Object)], DateTimePickerComponent.prototype, "disabledDates", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Object)], DateTimePickerComponent.prototype, "enabledDates", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Boolean)], DateTimePickerComponent.prototype, "sideBySide", void 0);
        __decorate([core_1.Input(), __metadata('design:type', Boolean)], DateTimePickerComponent.prototype, "inline", void 0);
        DateTimePickerComponent = __decorate([core_1.Component({
            selector: 'date-time-picker',
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES, forms_1.DefaultValueAccessor],
            template: "\n      <div class=\"input-group form-group\"><span class=\"input-group-addon\"><i class=\"zmdi zmdi-calendar\"></i></span><div class=\"dtp-container fg-line\" [class.disabled]=\"disabled\" [class.fg-toggled]=\"toggled\"><input class=\"form-control date-time-picker\" #i type=\"text\" placeholder=\"{{placeholder}}\" [formControl]=\"control\" [attr.disabled]=\"disabled\" (focus)=\"onFocus(i)\" (blur)=\"onBlur(i)\"></div></div>\n    "
        }), __metadata('design:paramtypes', [core_1.ElementRef])], DateTimePickerComponent);
        return DateTimePickerComponent;
    }(input_base_component_1.InputBase);
    exports.DateTimePickerComponent = DateTimePickerComponent;
    return module.exports;
});
System.registerDynamic("ng2-materialcomponents/forms/mask/adjust-caret-position", [], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var defaultArray = [];
    var emptyString = '';
    function adjustCaretPosition(_a) {
        var _b = _a.previousConformedValue,
            previousConformedValue = _b === void 0 ? emptyString : _b,
            _c = _a.currentCaretPosition,
            currentCaretPosition = _c === void 0 ? 0 : _c,
            conformedValue = _a.conformedValue,
            rawValue = _a.rawValue,
            placeholderChar = _a.placeholderChar,
            placeholder = _a.placeholder,
            _d = _a.indexesOfPipedChars,
            indexesOfPipedChars = _d === void 0 ? defaultArray : _d,
            _e = _a.caretTrapIndexes,
            caretTrapIndexes = _e === void 0 ? defaultArray : _e;
        if (currentCaretPosition === 0) {
            return 0;
        }
        var rawValueLength = rawValue.length;
        var previousConformedValueLength = previousConformedValue.length;
        var placeholderLength = placeholder.length;
        var conformedValueLength = conformedValue.length;
        var editLength = rawValueLength - previousConformedValueLength;
        var isAddition = editLength > 0;
        var isFirstRawValue = previousConformedValueLength === 0;
        var isPartialMultiCharEdit = editLength > 1 && !isAddition && !isFirstRawValue;
        if (isPartialMultiCharEdit) {
            return currentCaretPosition;
        }
        var possiblyHasRejectedChar = isAddition && (previousConformedValue === conformedValue || conformedValue === placeholder);
        var startingSearchIndex = 0;
        if (possiblyHasRejectedChar) {
            startingSearchIndex = currentCaretPosition - editLength;
        } else {
            var normalizedConformedValue_1 = conformedValue.toLowerCase();
            var normalizedRawValue = rawValue.toLowerCase();
            var leftHalfChars = normalizedRawValue.substr(0, currentCaretPosition).split(emptyString);
            var intersection = leftHalfChars.filter(function (char) {
                return normalizedConformedValue_1.indexOf(char) !== -1;
            });
            var targetChar_1 = intersection[intersection.length - 1];
            var pipedChars = indexesOfPipedChars.map(function (index) {
                return normalizedConformedValue_1[index];
            });
            var countTargetCharInPipedChars = pipedChars.filter(function (char) {
                return char === targetChar_1;
            }).length;
            var countTargetCharInIntersection = intersection.filter(function (char) {
                return char === targetChar_1;
            }).length;
            var countTargetCharInPlaceholder = placeholder.substr(0, placeholder.indexOf(placeholderChar)).split(emptyString).filter(function (char, index) {
                return char === targetChar_1 && rawValue[index] !== char;
            }).length;
            var requiredNumberOfMatches = countTargetCharInPlaceholder + countTargetCharInIntersection + countTargetCharInPipedChars;
            var numberOfEncounteredMatches = 0;
            for (var i = 0; i < conformedValueLength; i++) {
                var conformedValueChar = normalizedConformedValue_1[i];
                startingSearchIndex = i + 1;
                if (conformedValueChar === targetChar_1) {
                    numberOfEncounteredMatches++;
                }
                if (numberOfEncounteredMatches >= requiredNumberOfMatches) {
                    break;
                }
            }
        }
        if (isAddition) {
            var lastPlaceholderChar = startingSearchIndex;
            for (var i = startingSearchIndex; i <= placeholderLength; i++) {
                if (placeholder[i] === placeholderChar) {
                    lastPlaceholderChar = i;
                }
                if (placeholder[i] === placeholderChar || caretTrapIndexes.indexOf(i) !== -1 || i === placeholderLength) {
                    return lastPlaceholderChar;
                }
            }
        } else {
            for (var i = startingSearchIndex; i >= 0; i--) {
                if (placeholder[i - 1] === placeholderChar || caretTrapIndexes.indexOf(i) !== -1 || i === 0) {
                    return i;
                }
            }
        }
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = adjustCaretPosition;
    return module.exports;
});
System.registerDynamic('ng2-materialcomponents/forms/mask/conform-to-mask', ['./utilities', './constants'], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var utilities_1 = $__require('./utilities');
    var constants_1 = $__require('./constants');
    var emptyString = '';
    ;
    function conformToMask(rawValue, mask, config) {
        if (rawValue === void 0) {
            rawValue = emptyString;
        }
        if (mask === void 0) {
            mask = emptyString;
        }
        if (config === void 0) {
            config = {};
        }
        var _a = config.guide,
            guide = _a === void 0 ? true : _a,
            _b = config.previousConformedValue,
            previousConformedValue = _b === void 0 ? emptyString : _b,
            _c = config.placeholderChar,
            placeholderChar = _c === void 0 ? constants_1.placeholderChar : _c,
            _d = config.placeholder,
            placeholder = _d === void 0 ? utilities_1.convertMaskToPlaceholder(mask, constants_1.placeholderChar) : _d,
            currentCaretPosition = config.currentCaretPosition,
            keepCharPositions = config.keepCharPositions;
        var suppressGuide = guide === false && previousConformedValue !== undefined;
        var rawValueLength = rawValue.length;
        var previousConformedValueLength = previousConformedValue.length;
        var placeholderLength = placeholder.length;
        var maskLength = mask.length;
        var editDistance = rawValueLength - previousConformedValueLength;
        var isAddition = editDistance > 0;
        var indexOfFirstChange = currentCaretPosition + (isAddition ? -editDistance : 0);
        var indexOfLastChange = indexOfFirstChange + Math.abs(editDistance);
        if (keepCharPositions === true && !isAddition) {
            var compensatingPlaceholderChars = emptyString;
            for (var i = indexOfFirstChange; i < indexOfLastChange; i++) {
                if (placeholder[i] === placeholderChar) {
                    compensatingPlaceholderChars += placeholderChar;
                }
            }
            rawValue = rawValue.slice(0, indexOfFirstChange) + compensatingPlaceholderChars + rawValue.slice(indexOfFirstChange, rawValueLength);
        }
        var rawValueArr = rawValue.split(emptyString).map(function (char, i) {
            return { char: char, isNew: i >= indexOfFirstChange && i < indexOfLastChange };
        });
        for (var i = rawValueLength - 1; i >= 0; i--) {
            var char = rawValueArr[i].char;
            if (char !== placeholderChar) {
                var shouldOffset = i >= indexOfFirstChange && previousConformedValueLength === maskLength;
                if (char === placeholder[shouldOffset ? i - editDistance : i]) {
                    rawValueArr.splice(i, 1);
                }
            }
        }
        var conformedValue = emptyString;
        var someCharsRejected = false;
        placeholderLoop: for (var i = 0; i < placeholderLength; i++) {
            var charInPlaceholder = placeholder[i];
            if (charInPlaceholder === placeholderChar) {
                if (rawValueArr.length > 0) {
                    while (rawValueArr.length > 0) {
                        var _e = rawValueArr.shift(),
                            rawValueChar = _e.char,
                            isNew = _e.isNew;
                        if (rawValueChar === placeholderChar && suppressGuide !== true) {
                            conformedValue += placeholderChar;
                            continue placeholderLoop;
                        } else if (mask[i].test(rawValueChar)) {
                            if (keepCharPositions !== true || isNew === false || previousConformedValue === emptyString || guide === false || !isAddition) {
                                conformedValue += rawValueChar;
                            } else {
                                var rawValueArrLength = rawValueArr.length;
                                var indexOfNextAvailablePlaceholderChar = null;
                                for (var i_1 = 0; i_1 < rawValueArrLength; i_1++) {
                                    var charData = rawValueArr[i_1];
                                    if (charData.char !== placeholderChar && charData.isNew === false) {
                                        break;
                                    }
                                    if (charData.char === placeholderChar) {
                                        indexOfNextAvailablePlaceholderChar = i_1;
                                        break;
                                    }
                                }
                                if (indexOfNextAvailablePlaceholderChar !== null) {
                                    conformedValue += rawValueChar;
                                    rawValueArr.splice(indexOfNextAvailablePlaceholderChar, 1);
                                } else {
                                    i--;
                                }
                            }
                            continue placeholderLoop;
                        } else {
                            someCharsRejected = true;
                        }
                    }
                }
                if (suppressGuide === false) {
                    conformedValue += placeholder.substr(i, placeholderLength);
                }
                break;
            } else {
                conformedValue += charInPlaceholder;
            }
        }
        if (suppressGuide && isAddition === false) {
            var indexOfLastFilledPlaceholderChar = null;
            for (var i = 0; i < conformedValue.length; i++) {
                if (placeholder[i] === placeholderChar) {
                    indexOfLastFilledPlaceholderChar = i;
                }
            }
            if (indexOfLastFilledPlaceholderChar !== null) {
                conformedValue = conformedValue.substr(0, indexOfLastFilledPlaceholderChar + 1);
            } else {
                conformedValue = emptyString;
            }
        }
        return { conformedValue: conformedValue, meta: { someCharsRejected: someCharsRejected } };
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = conformToMask;
    return module.exports;
});
System.registerDynamic('ng2-materialcomponents/forms/mask/utilities', ['./constants'], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var constants_1 = $__require('./constants');
    var emptyArray = [];
    function convertMaskToPlaceholder(mask, placeholderChar) {
        if (mask === void 0) {
            mask = emptyArray;
        }
        if (placeholderChar === void 0) {
            placeholderChar = constants_1.placeholderChar;
        }
        if (mask.indexOf(placeholderChar) !== -1) {
            throw new Error('Placeholder character must not be used as part of the mask. Please specify a character ' + 'that is not present in your mask as your placeholder character.\n\n' + ("The placeholder character that was received is: " + JSON.stringify(placeholderChar) + "\n\n") + ("The mask that was received is: " + JSON.stringify(mask)));
        }
        return mask.map(function (char) {
            return char instanceof RegExp ? placeholderChar : char;
        }).join('');
    }
    exports.convertMaskToPlaceholder = convertMaskToPlaceholder;
    function isString(value) {
        return typeof value === 'string' || value instanceof String;
    }
    exports.isString = isString;
    function isNumber(value) {
        return value && value.length === undefined && !isNaN(value);
    }
    exports.isNumber = isNumber;
    var strCaretTrap = '[]';
    function processCaretTraps(mask) {
        var indexes = [];
        var indexOfCaretTrap;
        while (indexOfCaretTrap = mask.indexOf(strCaretTrap), indexOfCaretTrap !== -1) {
            indexes.push(indexOfCaretTrap);
            mask.splice(indexOfCaretTrap, 1);
        }
        return { maskWithoutCaretTraps: mask, indexes: indexes };
    }
    exports.processCaretTraps = processCaretTraps;
    return module.exports;
});
System.registerDynamic("ng2-materialcomponents/forms/mask/constants", [], true, function ($__require, exports, module) {
  "use strict";

  var define,
      global = this || self,
      GLOBAL = global;
  exports.placeholderChar = '_';
  return module.exports;
});
System.registerDynamic('ng2-materialcomponents/forms/mask/create-text-mask-input-element', ['./adjust-caret-position', './conform-to-mask', './utilities', './constants'], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var adjust_caret_position_1 = $__require('./adjust-caret-position');
    var conform_to_mask_1 = $__require('./conform-to-mask');
    var utilities_1 = $__require('./utilities');
    var constants_1 = $__require('./constants');
    var strPlaceholder = 'placeholder';
    var strFunction = 'function';
    var emptyString = '';
    var strNone = 'none';
    ;
    function createTextMaskInputElement(_a) {
        var inputElement = _a.inputElement,
            providedMask = _a.mask,
            guide = _a.guide,
            pipe = _a.pipe,
            _b = _a.placeholderChar,
            placeholderChar = _b === void 0 ? constants_1.placeholderChar : _b,
            onAccept = _a.onAccept,
            onReject = _a.onReject,
            _c = _a.keepCharPositions,
            keepCharPositions = _c === void 0 ? false : _c;
        if (typeof providedMask === 'object' && providedMask.pipe !== undefined && providedMask.mask !== undefined) {
            pipe = providedMask.pipe;
            providedMask = providedMask.mask;
        }
        var state = { previousConformedValue: emptyString };
        var placeholder;
        var mask;
        if (providedMask instanceof Array) {
            placeholder = utilities_1.convertMaskToPlaceholder(providedMask, placeholderChar);
        }
        if (inputElement.placeholder === emptyString) {
            inputElement.setAttribute(strPlaceholder, placeholder);
        }
        return {
            state: state,
            update: function (rawValue) {
                if (rawValue === void 0) {
                    rawValue = inputElement.value;
                }
                if (rawValue === state.previousConformedValue) {
                    return;
                }
                ;
                var safeRawValue = getSafeRawValue(rawValue);
                var currentCaretPosition = inputElement.selectionStart;
                var previousConformedValue = state.previousConformedValue;
                var caretTrapIndexes;
                if (typeof providedMask === strFunction) {
                    mask = providedMask(safeRawValue, { currentCaretPosition: currentCaretPosition, previousConformedValue: previousConformedValue, placeholderChar: placeholderChar });
                    var _a = utilities_1.processCaretTraps(mask),
                        maskWithoutCaretTraps = _a.maskWithoutCaretTraps,
                        indexes = _a.indexes;
                    mask = maskWithoutCaretTraps;
                    caretTrapIndexes = indexes;
                    placeholder = utilities_1.convertMaskToPlaceholder(mask, placeholderChar);
                } else {
                    mask = providedMask;
                }
                var conformToMaskConfig = {
                    previousConformedValue: previousConformedValue,
                    guide: guide,
                    placeholderChar: placeholderChar,
                    pipe: pipe,
                    placeholder: placeholder,
                    currentCaretPosition: currentCaretPosition,
                    keepCharPositions: keepCharPositions
                };
                var _b = conform_to_mask_1.default(safeRawValue, mask, conformToMaskConfig),
                    conformedValue = _b.conformedValue,
                    someCharsRejected = _b.meta.someCharsRejected;
                var piped = typeof pipe === strFunction;
                var pipeResults = {};
                if (piped) {
                    pipeResults = pipe(conformedValue, { rawValue: safeRawValue });
                    if (pipeResults === false) {
                        pipeResults = { value: previousConformedValue, rejected: true };
                    } else if (utilities_1.isString(pipeResults)) {
                        pipeResults = { value: pipeResults };
                    }
                }
                var finalConformedValue = piped ? pipeResults.value : conformedValue,
                    adjustedCaretPosition = adjust_caret_position_1.default({
                    previousConformedValue: previousConformedValue,
                    conformedValue: finalConformedValue,
                    placeholder: placeholder,
                    rawValue: safeRawValue,
                    currentCaretPosition: currentCaretPosition,
                    placeholderChar: placeholderChar,
                    indexesOfPipedChars: pipeResults.indexesOfPipedChars,
                    caretTrapIndexes: caretTrapIndexes
                }),
                    inputValueShouldBeEmpty = finalConformedValue === placeholder && adjustedCaretPosition === 0,
                    inputElementValue = inputValueShouldBeEmpty ? emptyString : finalConformedValue;
                inputElement.value = inputElementValue;
                safeSetSelection(inputElement, adjustedCaretPosition);
                state.previousConformedValue = inputElementValue;
                if (typeof onAccept === strFunction && inputElementValue !== previousConformedValue) {
                    onAccept();
                }
                var isDeletion = safeRawValue.length < previousConformedValue.length;
                if (typeof onReject === strFunction && (someCharsRejected || pipeResults.rejected) && isDeletion === false) {
                    onReject({
                        conformedValue: finalConformedValue,
                        pipeRejection: pipeResults.rejected,
                        maskRejection: someCharsRejected
                    });
                }
            }
        };
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = createTextMaskInputElement;
    function safeSetSelection(element, selectionPosition) {
        if (document.activeElement === element) {
            element.setSelectionRange(selectionPosition, selectionPosition, strNone);
        }
    }
    function getSafeRawValue(inputValue) {
        if (utilities_1.isString(inputValue)) {
            return inputValue;
        } else if (utilities_1.isNumber(inputValue)) {
            return String(inputValue);
        } else if (inputValue === undefined || inputValue === null) {
            return emptyString;
        } else {
            throw new Error('The "value" provided to Text Mask needs to be a string or a number. The value ' + ("received was:\n\n " + JSON.stringify(inputValue)));
        }
    }
    return module.exports;
});
System.registerDynamic("ng2-materialcomponents/forms/mask/masked-input.directive", ["@angular/core", "@angular/forms", "./create-text-mask-input-element"], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = this && this.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1 = $__require("@angular/core");
    var forms_1 = $__require("@angular/forms");
    var create_text_mask_input_element_1 = $__require("./create-text-mask-input-element");
    ;
    var MaskedInputDirective = function () {
        function MaskedInputDirective(inputElement) {
            this.textMaskConfig = {
                control: new forms_1.FormControl(),
                mask: '',
                guide: true,
                placeholderChar: '_',
                pipe: undefined,
                keepCharPositions: false,
                onReject: undefined,
                onAccept: undefined
            };
            this.inputElement = inputElement.nativeElement;
        }
        MaskedInputDirective.prototype.writeValue = function (value) {
            this.textMaskInputElement.update(value);
            this.textMaskConfig.control.updateValue(value, { onlySelf: true, emitEvent: false });
        };
        MaskedInputDirective.prototype.registerOnChange = function (fn) {
            this.textMaskConfig.control.valueChanges.subscribe(fn);
        };
        MaskedInputDirective.prototype.registerOnTouched = function () {};
        MaskedInputDirective.prototype.ngOnInit = function () {
            var _this = this;
            this.textMaskInputElement = create_text_mask_input_element_1.default(Object.assign({ inputElement: this.inputElement }, this.textMaskConfig));
            setTimeout(function () {
                return _this.onInput();
            });
        };
        MaskedInputDirective.prototype.onInput = function () {
            this.textMaskInputElement.update();
            this.writeValue(this.inputElement.value);
        };
        __decorate([core_1.Input('textMask'), __metadata('design:type', Object)], MaskedInputDirective.prototype, "textMaskConfig", void 0);
        MaskedInputDirective = __decorate([core_1.Directive({
            host: {
                '(input)': 'onInput()'
            },
            selector: 'input[textMask]'
        }), __metadata('design:paramtypes', [core_1.ElementRef])], MaskedInputDirective);
        return MaskedInputDirective;
    }();
    exports.MaskedInputDirective = MaskedInputDirective;
    exports.Directive = MaskedInputDirective;
    return module.exports;
});
System.registerDynamic('ng2-materialcomponents/ng2-materialcomponents', ['./common', './layout/app-header/app-header.component', './layout/sidebar/sidebar.component', './navigation/side-menu/side-menu.component', './navigation/tabset/tabset.component', './navigation/tab/tab.directive', './navigation/tab-heading/tab-heading.directive', './forms/checkbox/checkbox.component', './forms/email/email.component', './forms/number/number.component', './forms/password/password.component', './forms/phone/phone.component', './forms/radio/radio-group.component', './forms/radio/radio.component', './forms/select-picker/select-picker.component', './forms/text-box/text-box.component', './forms/text-area/text-area.component', './forms/toggle/toggle.component', './forms/date-time-picker/date-time-picker.component', './forms/mask/masked-input.directive'], true, function ($__require, exports, module) {
    "use strict";

    var define,
        global = this || self,
        GLOBAL = global;
    var common_1 = $__require('./common');
    var common_2 = $__require('./common');
    exports.NgTranscludeDirective = common_2.NgTranscludeDirective;
    exports.MATERIAL_COMMON = [common_1.NgTranscludeDirective];
    var app_header_component_1 = $__require('./layout/app-header/app-header.component');
    var sidebar_component_1 = $__require('./layout/sidebar/sidebar.component');
    var app_header_component_2 = $__require('./layout/app-header/app-header.component');
    exports.AppHeaderComponent = app_header_component_2.AppHeaderComponent;
    var sidebar_component_2 = $__require('./layout/sidebar/sidebar.component');
    exports.SidebarComponent = sidebar_component_2.SidebarComponent;
    exports.MATERIAL_LAYOUT = [app_header_component_1.AppHeaderComponent, sidebar_component_1.SidebarComponent];
    var side_menu_component_1 = $__require('./navigation/side-menu/side-menu.component');
    var tabset_component_1 = $__require('./navigation/tabset/tabset.component');
    var tab_directive_1 = $__require('./navigation/tab/tab.directive');
    var tab_heading_directive_1 = $__require('./navigation/tab-heading/tab-heading.directive');
    var side_menu_component_2 = $__require('./navigation/side-menu/side-menu.component');
    exports.SideMenuComponent = side_menu_component_2.SideMenuComponent;
    var tabset_component_2 = $__require('./navigation/tabset/tabset.component');
    exports.TabsetComponent = tabset_component_2.TabsetComponent;
    var tab_directive_2 = $__require('./navigation/tab/tab.directive');
    exports.TabDirective = tab_directive_2.TabDirective;
    var tab_heading_directive_2 = $__require('./navigation/tab-heading/tab-heading.directive');
    exports.TabHeadingDirective = tab_heading_directive_2.TabHeadingDirective;
    exports.MATERIAL_NAVIGATION = [side_menu_component_1.SideMenuComponent, tabset_component_1.TabsetComponent, tab_directive_1.TabDirective, tab_heading_directive_1.TabHeadingDirective];
    var checkbox_component_1 = $__require('./forms/checkbox/checkbox.component');
    var email_component_1 = $__require('./forms/email/email.component');
    var number_component_1 = $__require('./forms/number/number.component');
    var password_component_1 = $__require('./forms/password/password.component');
    var phone_component_1 = $__require('./forms/phone/phone.component');
    var radio_group_component_1 = $__require('./forms/radio/radio-group.component');
    var radio_component_1 = $__require('./forms/radio/radio.component');
    var select_picker_component_1 = $__require('./forms/select-picker/select-picker.component');
    var text_box_component_1 = $__require('./forms/text-box/text-box.component');
    var text_area_component_1 = $__require('./forms/text-area/text-area.component');
    var toggle_component_1 = $__require('./forms/toggle/toggle.component');
    var date_time_picker_component_1 = $__require('./forms/date-time-picker/date-time-picker.component');
    var masked_input_directive_1 = $__require('./forms/mask/masked-input.directive');
    var checkbox_component_2 = $__require('./forms/checkbox/checkbox.component');
    exports.CheckboxComponent = checkbox_component_2.CheckboxComponent;
    var email_component_2 = $__require('./forms/email/email.component');
    exports.EmailComponent = email_component_2.EmailComponent;
    var number_component_2 = $__require('./forms/number/number.component');
    exports.NumberComponent = number_component_2.NumberComponent;
    var password_component_2 = $__require('./forms/password/password.component');
    exports.PasswordComponent = password_component_2.PasswordComponent;
    var phone_component_2 = $__require('./forms/phone/phone.component');
    exports.PhoneComponent = phone_component_2.PhoneComponent;
    var radio_group_component_2 = $__require('./forms/radio/radio-group.component');
    exports.RadioGroupComponent = radio_group_component_2.RadioGroupComponent;
    var radio_component_2 = $__require('./forms/radio/radio.component');
    exports.RadioComponent = radio_component_2.RadioComponent;
    var select_picker_component_2 = $__require('./forms/select-picker/select-picker.component');
    exports.SelectPickerComponent = select_picker_component_2.SelectPickerComponent;
    var text_box_component_2 = $__require('./forms/text-box/text-box.component');
    exports.TextBoxComponent = text_box_component_2.TextBoxComponent;
    var text_area_component_2 = $__require('./forms/text-area/text-area.component');
    exports.TextAreaComponent = text_area_component_2.TextAreaComponent;
    var toggle_component_2 = $__require('./forms/toggle/toggle.component');
    exports.ToggleComponent = toggle_component_2.ToggleComponent;
    var date_time_picker_component_2 = $__require('./forms/date-time-picker/date-time-picker.component');
    exports.DateTimePickerComponent = date_time_picker_component_2.DateTimePickerComponent;
    var masked_input_directive_2 = $__require('./forms/mask/masked-input.directive');
    exports.MaskedInputDirective = masked_input_directive_2.MaskedInputDirective;
    exports.MATERIAL_FORM = [checkbox_component_1.CheckboxComponent, email_component_1.EmailComponent, number_component_1.NumberComponent, password_component_1.PasswordComponent, phone_component_1.PhoneComponent, radio_group_component_1.RadioGroupComponent, radio_component_1.RadioComponent, select_picker_component_1.SelectPickerComponent, text_box_component_1.TextBoxComponent, text_area_component_1.TextAreaComponent, toggle_component_1.ToggleComponent, date_time_picker_component_1.DateTimePickerComponent, masked_input_directive_1.MaskedInputDirective];
    exports.MATERIAL_ALL = [exports.MATERIAL_COMMON, exports.MATERIAL_LAYOUT, exports.MATERIAL_NAVIGATION, exports.MATERIAL_FORM];
    return module.exports;
});