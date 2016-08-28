// from here: https://github.com/pleerock/ng2-radio-group
//
// import {Component, Input, ViewEncapsulation} from '@angular/core';
// import {NG_VALUE_ACCESSOR, NG_VALIDATORS} from '@angular/forms';
// import {SelectValueAccessor} from "./SelectValueAccessor";
// import {SelectValidator} from "./SelectValidator";
//
// @Component({
//     selector: 'radio-group',
//     template: `<div class="radio-group"><ng-content></ng-content></div>`,
//     encapsulation: ViewEncapsulation.None,
//     providers: [
//         SelectValueAccessor,
//         SelectValidator,
//         { provide: NG_VALUE_ACCESSOR, useExisting: SelectValueAccessor, multi: true },
//         { provide: NG_VALIDATORS, useExisting: SelectValidator, multi: true },
//     ],
// })
// export class RadioGroup {
//
//     // -------------------------------------------------------------------------
//     // Inputs
//     // -------------------------------------------------------------------------
//
//     @Input()
//     disabled: boolean = false;
//
//     @Input()
//     readonly: boolean = false;
//
//     // -------------------------------------------------------------------------
//     // Input accessors
//     // -------------------------------------------------------------------------
//
//     @Input()
//     set trackBy(trackBy: string|((item: any) => string)) {
//         this.valueAccessor.trackBy = trackBy;
//     }
//
//     get trackBy() {
//         return this.valueAccessor.trackBy;
//     }
//
//     @Input()
//     set required(required: boolean) {
//         this.validator.options.required = required;
//     }
//
//     get required() {
//         return this.validator.options.required;
//     }
//
//     // -------------------------------------------------------------------------
//     // Constructor
//     // -------------------------------------------------------------------------
//
//     constructor(public valueAccessor: SelectValueAccessor,
//                 private validator: SelectValidator) {
//     }
//
// }
