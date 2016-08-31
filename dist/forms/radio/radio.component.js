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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var radio_group_component_1 = require('./radio-group.component');
var RadioComponent = (function () {
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
            setTimeout(function () { _this._updateValue(); }, 0);
        }
    };
    RadioComponent.prototype.check = function () {
        this._updateValue();
    };
    RadioComponent.prototype._updateValue = function () {
        this.radioGroup.control.updateValue(this.value);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', forms_1.FormGroupDirective)
    ], RadioComponent.prototype, "fgd", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], RadioComponent.prototype, "field", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], RadioComponent.prototype, "label", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], RadioComponent.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], RadioComponent.prototype, "nane", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], RadioComponent.prototype, "value", void 0);
    RadioComponent = __decorate([
        core_1.Component({
            selector: 'radio',
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES],
            template: "\n      <div class=\"radio m-b-15\" [class.disabled]=\"disabled\"><label><input type=\"radio\" name=\"{{groupName}}\" [attr.disabled]=\"disabled\" [attr.value]=\"value\" (click)=\"check()\"><i class=\"input-helper\"></i>{{label}}</label></div>\n    ",
        }),
        __param(1, core_1.Host()),
        __param(1, core_1.Inject(core_1.forwardRef(function () { return radio_group_component_1.RadioGroupComponent; }))), 
        __metadata('design:paramtypes', [core_1.ElementRef, radio_group_component_1.RadioGroupComponent])
    ], RadioComponent);
    return RadioComponent;
}());
exports.RadioComponent = RadioComponent;
