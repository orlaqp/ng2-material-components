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
var TextBoxComponent = (function (_super) {
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
    TextBoxComponent.prototype.ngOnDestroy = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', forms_1.FormGroupDirective)
    ], TextBoxComponent.prototype, "fgd", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TextBoxComponent.prototype, "placeholder", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TextBoxComponent.prototype, "field", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TextBoxComponent.prototype, "label", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], TextBoxComponent.prototype, "floatingLabel", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TextBoxComponent.prototype, "leftIcon", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TextBoxComponent.prototype, "rightIcon", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TextBoxComponent.prototype, "value", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], TextBoxComponent.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], TextBoxComponent.prototype, "required", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], TextBoxComponent.prototype, "min", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], TextBoxComponent.prototype, "max", void 0);
    TextBoxComponent = __decorate([
        core_1.Component({
            selector: 'text-box',
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES, forms_1.DefaultValueAccessor],
            template: "\n      <div class=\"input-group m-b-15 w-100\" [class.fg-float]=\"floatingLabel\" style=\"{ 'has-error': !control.valid &amp;&amp; (fgd.form.submitted || control.dirty)}\"><label *ngIf=\"label &amp;&amp; !floatingLabel\">{{label}}</label><span class=\"input-group-addon\" *ngIf=\"leftIcon\"><i class=\"zmdi zmdi-{{leftIcon}}\"></i></span><div class=\"fg-line\" [class.disabled]=\"disabled\" [class.fg-toggled]=\"toggled\"><input class=\"form-control\" #i type=\"text\" placeholder=\"{{placeholder}}\" [formControl]=\"control\" [attr.disabled]=\"disabled\" (focus)=\"onFocus(i)\" (blur)=\"onBlur(i)\"><label class=\"fg-label\" *ngIf=\"label &amp;&amp; floatingLabel\">{{label}}</label></div><span class=\"input-group-addon last\" *ngIf=\"rightIcon\"><i class=\"zmdi zmdi-{{rightIcon}}\"></i></span><div *ngIf=\"!control.valid &amp;&amp; (control.dirty || fgd.form.submitted)\"><small class=\"help-block animated fadeInDown\" *ngFor=\"let v of validations\" [class.hidden]=\"!control.errors[v.type]\">{{v.message}}</small></div></div>\n    ",
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], TextBoxComponent);
    return TextBoxComponent;
}(input_base_component_1.InputBase));
exports.TextBoxComponent = TextBoxComponent;
