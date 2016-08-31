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
var type_enum_1 = require('../../models/type-enum');
var CheckboxComponent = (function (_super) {
    __extends(CheckboxComponent, _super);
    function CheckboxComponent(el) {
        _super.call(this, el);
        this.dataType = type_enum_1.TypeEnum.Boolean;
    }
    CheckboxComponent.prototype.addValidators = function () { };
    CheckboxComponent.prototype.ngOnInit = function () {
        this.onInit();
    };
    CheckboxComponent.prototype.ngOnDestroy = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', forms_1.FormGroupDirective)
    ], CheckboxComponent.prototype, "fgd", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CheckboxComponent.prototype, "field", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CheckboxComponent.prototype, "label", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], CheckboxComponent.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], CheckboxComponent.prototype, "value", void 0);
    CheckboxComponent = __decorate([
        core_1.Component({
            selector: 'checkbox',
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES, forms_1.CheckboxControlValueAccessor],
            template: "\n      <div class=\"checkbox m-b-25\"><label><input class=\"form-control\" type=\"checkbox\" [formControl]=\"control\" [attr.disabled]=\"disabled\"><i class=\"input-helper\"></i>{{label}}</label></div>\n    ",
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], CheckboxComponent);
    return CheckboxComponent;
}(input_base_component_1.InputBase));
exports.CheckboxComponent = CheckboxComponent;
