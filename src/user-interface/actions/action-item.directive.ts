import { Directive, ElementRef, Input, Renderer, AfterViewInit } from '@angular/core';
import { IMenuItem } from '../../models/menu-item';

@Directive({ selector: '[actionItem]' })
export class ActionItemDirective implements AfterViewInit {

    @Input() actionItem: IMenuItem;

    constructor(private el: ElementRef, private renderer: Renderer) { }

    public ngAfterViewInit() {
        // add anchor
        var anchor = this.renderer.createElement(this.el.nativeElement, 'a');

        // add icon if it was provided
        let icon = this.actionItem.icon;

        if (!icon) {
            throw 'Action items need to have an icon defined';
        }

        var i = this.renderer.createElement(anchor, 'i');
        this.renderer.setElementClass(i, 'zmdi', true);
        this.renderer.setElementClass(i, `zmdi-${icon}`, true);
    }

}
