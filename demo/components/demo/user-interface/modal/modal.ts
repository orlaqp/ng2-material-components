import { Component, ViewChild } from '@angular/core';
import { ModalComponent } from '../../../../../dist/ng2-material-components';

@Component({
    selector: 'demo-modal',
    template: require('./modal.html'),
})
export class DemoModalComponent {
 @ViewChild('modal')
    modal: ModalComponent;
    items: string[] = ['item1', 'item2', 'item3'];
    selected: string;
    output: string;
    model: Person = new Person();

    index: number = 0;
    backdropOptions = [true, false, 'static'];
    cssClass: string = '';

    animation: boolean = true;
    keyboard: boolean = true;
    backdrop: string | boolean = true;
    css: boolean = false;

    constructor() { }

    closed() {
        this.output = '(closed) ' + this.selected;
    }

    dismissed() {
        this.output = '(dismissed)';
    }

    opened() {
        this.output = '(opened)';
    }

    open() {
        this.modal.open();
    }
}

export class Person {
    firstName: string;
    lastName: string;
}
