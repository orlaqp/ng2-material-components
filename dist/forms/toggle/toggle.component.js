"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var forms_1 = require('@angular/forms');
var input_base_component_1 = require('../input-base/input-base.component');
var utilities_1 = require('../../utils/utilities');
var ToggleComponent = (function (_super) {
    __extends(ToggleComponent, _super);
    function ToggleComponent(el) {
        _super.call(this, el);
        this.color = '';
    }
    ToggleComponent.prototype.addValidators = function () { };
    ToggleComponent.prototype.ngOnInit = function () {
        this.onInit();
        this.identifier = utilities_1.guid();
    };
    ToggleComponent.prototype.ngOnDestroy = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', forms_1.FormGroupDirective)
    ], ToggleComponent.prototype, "fgd", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ToggleComponent.prototype, "placeholder", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ToggleComponent.prototype, "field", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ToggleComponent.prototype, "label", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ToggleComponent.prototype, "value", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], ToggleComponent.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ToggleComponent.prototype, "color", void 0);
    ToggleComponent = __decorate([
        core_1.Component({
            selector: 'toggle',
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES, forms_1.DefaultValueAccessor],
            template: "\n      <div class=\"toggle-switch\" [class.disabled]=\"disabled\" [attr.data-ts-color]=\"color\"><label class=\"ts-label\" [attr.for]=\"identifier\">{{label}}</label><input [attr.id]=\"identifier\" type=\"checkbox\" hidden=\"hidden\" [attr.disabled]=\"disabled\" [formControl]=\"control\"><label class=\"ts-helper\" [attr.for]=\"identifier\"></label></div>\n    ",
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], ToggleComponent);
    return ToggleComponent;
}(input_base_component_1.InputBase));
exports.ToggleComponent = ToggleComponent;
