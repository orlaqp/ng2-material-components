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
var radio_component_1 = require('./radio.component');
var RadioGroupComponent = (function (_super) {
    __extends(RadioGroupComponent, _super);
    function RadioGroupComponent(el) {
        _super.call(this, el);
        this.disabled = false;
    }
    RadioGroupComponent.prototype.ngOnInit = function () {
        this.onInit();
    };
    RadioGroupComponent.prototype.addValidators = function () { };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', forms_1.FormGroupDirective)
    ], RadioGroupComponent.prototype, "fgd", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], RadioGroupComponent.prototype, "field", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], RadioGroupComponent.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], RadioGroupComponent.prototype, "defaultValue", void 0);
    RadioGroupComponent = __decorate([
        core_1.Component({
            selector: 'radio-group',
            directives: [radio_component_1.RadioComponent],
            template: "\n      <div class=\"radio-group\"><ng-content></ng-content></div>\n    ",
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], RadioGroupComponent);
    return RadioGroupComponent;
}(input_base_component_1.InputBase));
exports.RadioGroupComponent = RadioGroupComponent;
