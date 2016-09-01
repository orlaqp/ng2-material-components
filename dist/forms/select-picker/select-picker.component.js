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
var SelectPickerComponent = (function (_super) {
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
            return $(_this.el.nativeElement).find('.my-selectpicker')
                .selectpicker({
                liveSearch: _this.liveSearch,
            });
        }, 0);
    };
    SelectPickerComponent.prototype.addValidators = function () { };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', forms_1.FormGroupDirective)
    ], SelectPickerComponent.prototype, "fgd", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SelectPickerComponent.prototype, "field", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], SelectPickerComponent.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SelectPickerComponent.prototype, "placeholder", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], SelectPickerComponent.prototype, "items", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], SelectPickerComponent.prototype, "liveSearch", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], SelectPickerComponent.prototype, "allowMultiSelection", void 0);
    SelectPickerComponent = __decorate([
        core_1.Component({
            selector: 'select-picker',
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES, forms_1.SelectControlValueAccessor],
            template: "\n      <select class=\"my-selectpicker\" style=\"display: none\" [attr.multiple]=\"allowMultiSelection ? true : null\" [formControl]=\"control\"><option *ngFor=\"let item of items\" value=\"{{item.id}}\">{{item.title}}</option></select>\n    ",
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], SelectPickerComponent);
    return SelectPickerComponent;
}(input_base_component_1.InputBase));
exports.SelectPickerComponent = SelectPickerComponent;
