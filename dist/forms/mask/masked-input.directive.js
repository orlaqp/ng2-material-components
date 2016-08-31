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
var forms_1 = require('@angular/forms');
var create_text_mask_input_element_1 = require('./create-text-mask-input-element');
;
var MaskedInputDirective = (function () {
    function MaskedInputDirective(inputElement) {
        this.textMaskConfig = {
            control: new forms_1.FormControl(),
            mask: '',
            guide: true,
            placeholderChar: '_',
            pipe: undefined,
            keepCharPositions: false,
            onReject: undefined,
            onAccept: undefined,
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
    MaskedInputDirective.prototype.registerOnTouched = function () { };
    MaskedInputDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.textMaskInputElement = create_text_mask_input_element_1.default(Object.assign({ inputElement: this.inputElement }, this.textMaskConfig));
        setTimeout(function () { return _this.onInput(); });
    };
    MaskedInputDirective.prototype.onInput = function () {
        this.textMaskInputElement.update();
        this.writeValue(this.inputElement.value);
    };
    __decorate([
        core_1.Input('textMask'), 
        __metadata('design:type', Object)
    ], MaskedInputDirective.prototype, "textMaskConfig", void 0);
    MaskedInputDirective = __decorate([
        core_1.Directive({
            host: {
                '(input)': 'onInput()',
            },
            selector: 'input[textMask]',
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], MaskedInputDirective);
    return MaskedInputDirective;
}());
exports.MaskedInputDirective = MaskedInputDirective;
exports.Directive = MaskedInputDirective;
