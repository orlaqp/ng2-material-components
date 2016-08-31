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
var DateTimePickerComponent = (function (_super) {
    __extends(DateTimePickerComponent, _super);
    function DateTimePickerComponent(el) {
        _super.call(this, el);
        this.el = el;
        this.format = 'MM/DD/YYYY hh:mm:ss A';
    }
    DateTimePickerComponent.prototype.addValidators = function () { };
    DateTimePickerComponent.prototype.ngOnInit = function () {
        this.onInit();
    };
    DateTimePickerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var options = this._getOptions();
        var ele = $(this.el.nativeElement).find('.date-time-picker');
        ele.datetimepicker(options)
            .on('dp.change', function (data) {
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
                close: 'zmdi zmdi-close',
            },
        };
        Object.assign(options, {
            format: this.format,
            minDate: this.minDate,
            maxDate: this.maxDate,
            disabledDates: this.disabledDates,
            enabledDates: this.enabledDates,
            sideBySide: this.sideBySide,
            inline: this.inline,
        });
        return options;
    };
    DateTimePickerComponent.prototype._dateFormatted = function (d) {
        return d.format(this.format);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', forms_1.FormGroupDirective)
    ], DateTimePickerComponent.prototype, "fgd", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DateTimePickerComponent.prototype, "placeholder", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DateTimePickerComponent.prototype, "field", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DateTimePickerComponent.prototype, "label", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], DateTimePickerComponent.prototype, "floatingLabel", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], DateTimePickerComponent.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DateTimePickerComponent.prototype, "format", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DateTimePickerComponent.prototype, "minDate", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DateTimePickerComponent.prototype, "maxDate", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DateTimePickerComponent.prototype, "disabledDates", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DateTimePickerComponent.prototype, "enabledDates", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], DateTimePickerComponent.prototype, "sideBySide", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], DateTimePickerComponent.prototype, "inline", void 0);
    DateTimePickerComponent = __decorate([
        core_1.Component({
            selector: 'date-time-picker',
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES, forms_1.DefaultValueAccessor],
            template: "\n      <div class=\"input-group form-group\"><span class=\"input-group-addon\"><i class=\"zmdi zmdi-calendar\"></i></span><div class=\"dtp-container fg-line\" [class.disabled]=\"disabled\" [class.fg-toggled]=\"toggled\"><input class=\"form-control date-time-picker\" #i type=\"text\" placeholder=\"{{placeholder}}\" [formControl]=\"control\" [attr.disabled]=\"disabled\" (focus)=\"onFocus(i)\" (blur)=\"onBlur(i)\"></div></div>\n    ",
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], DateTimePickerComponent);
    return DateTimePickerComponent;
}(input_base_component_1.InputBase));
exports.DateTimePickerComponent = DateTimePickerComponent;
