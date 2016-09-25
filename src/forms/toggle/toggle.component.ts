import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputBase } from '../input-base/input-base.component';
import { guid } from '../../utils/utilities';

@Component({
    selector: 'toggle',
    templateUrl: './toggle.component.pug',
})
export class ToggleComponent extends InputBase implements OnInit {

    @Input() fg: FormGroup;
    @Input() placeholder: string;
    @Input() field: string;
    @Input() label: string;
    @Input() value: string;
    @Input() disabled: boolean;
    @Input() color: string = '';

    public identifier: string;

    constructor(el: ElementRef) {
        super(el);
    }

    public addValidators(): void { }

    public ngOnInit(): void {
        this.onInit();

        this.identifier = guid();
    }

    public ngOnDestroy(): void {

    }

}
