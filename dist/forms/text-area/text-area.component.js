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
var autosize_1 = require('./autosize');
var TextAreaComponent = (function (_super) {
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
    TextAreaComponent.prototype.ngOnDestroy = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', forms_1.FormGroupDirective)
    ], TextAreaComponent.prototype, "fgd", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TextAreaComponent.prototype, "placeholder", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TextAreaComponent.prototype, "field", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TextAreaComponent.prototype, "label", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], TextAreaComponent.prototype, "floatingLabel", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TextAreaComponent.prototype, "leftIcon", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], TextAreaComponent.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TextAreaComponent.prototype, "value", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], TextAreaComponent.prototype, "required", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], TextAreaComponent.prototype, "min", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], TextAreaComponent.prototype, "max", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], TextAreaComponent.prototype, "autosize", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], TextAreaComponent.prototype, "rows", void 0);
    TextAreaComponent = __decorate([
        core_1.Component({
            selector: 'text-area',
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES, forms_1.DefaultValueAccessor],
            template: "\n      <div class=\"form-group m-b-25 w-100\" [ngClass]=\"{ 'has-error': !control.valid &amp;&amp; (fgd.form.submitted || control.dirty)}\"><label *ngIf=\"label\">{{label}}</label><div class=\"fg-line\" [class.disabled]=\"disabled\" [class.fg-toggled]=\"toggled\"><textarea class=\"form-control auto-size\" #i [attr.disabled]=\"disabled\" placeholder=\"{{placeholder}}\" [formControl]=\"control\" (focus)=\"onFocus(i)\" (blur)=\"onBlur(i)\" [attr.rows]=\"rows\"></textarea></div><div *ngIf=\"!control.valid &amp;&amp; (control.dirty || fgd.form.submitted)\"><small class=\"help-block animated fadeInDown\" *ngFor=\"let v of validations\" [class.hidden]=\"!control.errors[v.type]\">{{v.message}}</small></div></div>\n    ",
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], TextAreaComponent);
    return TextAreaComponent;
}(input_base_component_1.InputBase));
exports.TextAreaComponent = TextAreaComponent;
