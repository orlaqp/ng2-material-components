// from: https://github.com/ng2-ui/ng2-datetime-picker

export interface HTMLInputElement {
    [key: string]: Date;
}

import {
    Component,
    Input,
    OnInit,
    OnChanges,
    ComponentRef,
    ViewContainerRef,
    ComponentFactoryResolver,
    Optional,
    SimpleChanges,
    SkipSelf,
    Host,
    ElementRef,
} from '@angular/core';
import { AbstractControl, ControlContainer, FormGroup } from '@angular/forms';
import { DateTimePickerPopupComponent } from './datetime-picker-popup.component';
import { DateTime } from './datetime';
import { InputBase } from '../input-base/input-base.component';
import { iOS } from '../../utils/utilities';

/**
 * If the given string is not a valid date, it defaults back to today
 */
@Component({
    selector: 'date-time-picker',
    templateUrl: './date-time-picker.component.pug',
    providers: [DateTime],
})
export class DateTimePickerComponent extends InputBase implements OnInit, OnChanges {
    @Input() fg: FormGroup;
    @Input() placeholder: string;
    @Input() field: string;
    @Input() label: string;
    @Input() floatingLabel: boolean;
    @Input() disabled: boolean;
    @Input() alt: boolean;
    @Input() required: boolean;

    @Input() dateFormat = 'MM/DD/YYYY';
    @Input() dateOnly = true;
    @Input() hour = 23;
    @Input() minute = 59;
    @Input() closeOnSelect = true;

    private el: any;                               /* input element */
    private datetimePickerEl: HTMLElement;                      /* dropdown element */
    private componentRef: ComponentRef<DateTimePickerPopupComponent>; /* dropdown component reference */
    private ctrl: AbstractControl;
    private sub: any;

    constructor(
        private ele: ElementRef,
        private resolver: ComponentFactoryResolver,
        private viewContainerRef: ViewContainerRef,
        @Optional() @Host() @SkipSelf() private parent: ControlContainer
    ) {
        super(ele);
    }

    ngOnInit(): void {
        this.onInit();

        this.el = this.viewContainerRef.element.nativeElement
                    .getElementsByTagName('input')[0];

        // show native date picker in mobile apps
        if (iOS()) {
            this.inputType = 'date';
            return;
        }

        // if (this.parent && this.parent['form'] && this.formControlName) {
        //     this.ctrl = (<FormGroup>this.parent['form']).get(this.formControlName);
        //     this.sub = this.ctrl.valueChanges.subscribe((newNgModel) => {
        //         this.triggerChange(newNgModel);
        //     });
        // }

        //wrap this element with a <div> tag, so that we can position dynamic elememnt correctly
        let wrapper = document.createElement('div');
        wrapper.className = 'ng2-datetime-picker';
        wrapper.style.display = 'inline-block';
        wrapper.style.position = 'relative';
        this.el.parentElement.insertBefore(wrapper, this.el.nextSibling);
        wrapper.appendChild(this.el);

        // add a click listener to document, so that it can hide when others clicked
        document.body.addEventListener('click', this.hideDatetimePicker);
        this.el.addEventListener('keyup', this.keyEventListener);
        setTimeout(() => { // after [(ngModel)] is applied
            this.valueChanged(this.el.value);
        });
    }

    public addValidators(): void { }

    ngOnChanges(changes: SimpleChanges) {
        let newNgModel: any;
        if (changes && changes['ngModel']) {
            newNgModel = changes['ngModel'].currentValue;
        }

        this.triggerChange(newNgModel);
    }

    triggerChange(newNgModel: any) {
        if (this.ctrl) {
            this.ctrl.markAsDirty();
        }
        if (typeof newNgModel === 'string') {
            this.el['dateValue'] = this.getDate(newNgModel);
        } else if (newNgModel instanceof Date) {
            this.el['dateValue'] = newNgModel;
        }
    }

    ngOnDestroy(): void {
        if (this.sub) {
            this.sub.unsubscribe();
        }
        // add a click listener to document, so that it can hide when others clicked
        document.body.removeEventListener('click', this.hideDatetimePicker);
        this.el.removeEventListener('keyup', this.keyEventListener);

        if (this.datetimePickerEl) {
            this.datetimePickerEl.removeEventListener('keyup', this.keyEventListener);
        }
    }

    preventDefault(event: MouseEvent) {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
    }

    /* input element string value is changed */
    valueChanged = (date: string | Date): void => {
        if (typeof date === 'string' && date) {
            this.el['dateValue'] = this.getDate(date);
        } else if (typeof date === 'object') {
            this.el['dateValue'] = date;
        } else if (typeof date === 'undefined') {
            this.el['dateValue'] = null;
        }

        // this.el.value = this.getFormattedDateStr();
        let formattedDate = this.getFormattedDateStr();

        if (!moment(this.control.value).isSame(formattedDate))
            this.control.setValue(this.getFormattedDateStr());

        // this.ngModel = this.el['dateValue'];
        // if (this.ngModel) {
        //     this.ngModel.toString = () => { return this.el.value; };
        //     this.ngModelChange.emit(this.ngModel);
        // }
    };

    //show datetimePicker element below the current element
    showDatetimePicker(event: MouseEvent) {
        if (this.componentRef || iOS()) { /* if already shown, do nothing */
            return;
        }

        setTimeout(() => {
            let factory = this.resolver.resolveComponentFactory(DateTimePickerPopupComponent);

            this.componentRef = this.viewContainerRef.createComponent(factory);
            this.datetimePickerEl = this.componentRef.location.nativeElement;
            this.datetimePickerEl.addEventListener('keyup', this.keyEventListener);

            let component = this.componentRef.instance;
            component.initDateTime(<Date>this.el['dateValue']);
            component.dateOnly = this.dateOnly;

            this.styleDatetimePicker();

            component.changes.subscribe(this.valueChanged);
            component.closing.subscribe(() => {
                return this.closeOnSelect !== false && this.hideDatetimePicker();
            });
        }, 10);

    }

    hideDatetimePicker = (event?: any): void => {
        if (this.componentRef) {
            if (  /* invoked by clicking on somewhere in document */
                event &&
                event.type === 'click' &&
                event.target !== this.el &&
                !this.elementIn(event.target, this.datetimePickerEl)
            ) {
                this.componentRef.destroy();
                this.componentRef = undefined;
            } else if (!event) {  /* invoked by function call */
                this.componentRef.destroy();
                this.componentRef = undefined;
            }
        }
    };

    private keyEventListener = (e: KeyboardEvent): void => {
        if (e.keyCode === 27) { //ESC key
            this.hideDatetimePicker();
        }
    };

    private elementIn(el: Node, containerEl: Node): boolean {
        while (el = el.parentNode) {
            if (el === containerEl) return true;
        }
        return false;
    }

    private styleDatetimePicker() {
        // setting position, width, and height of auto complete dropdown
        let thisElBCR = this.el.getBoundingClientRect();
        this.datetimePickerEl.style.width = thisElBCR.width + 'px';
        this.datetimePickerEl.style.position = 'absolute';
        this.datetimePickerEl.style.zIndex = '1000';
        this.datetimePickerEl.style.left = '42px';
        this.datetimePickerEl.style.transition = 'height 0.3s ease-in';

        // this.datetimePickerEl.style.visibility = 'hidden';

        setTimeout(() => {
            let thisElBcr = this.el.getBoundingClientRect();
            let datetimePickerElBcr = this.datetimePickerEl.getBoundingClientRect();

            if (thisElBcr.bottom + datetimePickerElBcr.height > window.innerHeight) {
                // if not enough space to show on below, show above
                this.datetimePickerEl.style.bottom = '58px';
            } else {
                // otherwise, show below
                this.datetimePickerEl.style.top = thisElBcr.height + 'px';
            }
            this.datetimePickerEl.style.visibility = 'visible';
        });
    };

    /**
     *  returns toString function of date object
     */
    private getFormattedDateStr(): string {

        if (this.el['dateValue']) {
            if (this.dateFormat) {
                return DateTime.momentFormatDate(this.el['dateValue'], this.dateFormat);
            } else {
                return DateTime.formatDate(this.el['dateValue'], this.dateOnly);
            }
        } else {
            return null;
        }
    }

    private getDate(arg: any): Date {
        let date: Date;
        if (typeof arg === 'string') {
            if (this.dateFormat) {
                date = DateTime.momentParse(arg, this.dateFormat);
            } else {
                //remove timezone and respect day light saving time
                date = DateTime.parse(arg);
            }
        } else {
            date = <Date>arg;
        }
        return date;
    }
}
