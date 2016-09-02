import { Directive, ElementRef, Input, Renderer, AfterViewInit, HostListener } from '@angular/core';
import { IMenuItem } from '../../models/menu-item';
import { ActionsService } from './actions.service';

@Directive({ selector: '[actionItem]' })
export class ActionItemDirective implements AfterViewInit {

    @Input() actionItem: IMenuItem;

    constructor(private _el: ElementRef, private _renderer: Renderer, private _actionsService: ActionsService) { }

    public ngAfterViewInit() {
        // add anchor
        this._createAnchor(this._el.nativeElement, this.actionItem);
    }

    @HostListener('click', [])
    public onActionClicked(): void {
        this._actionsService.announceAction(this.actionItem);
    }

    private _createAnchor(ele: any, menuItem: IMenuItem) {
        var anchor = this._renderer.createElement(ele, 'a');
        this._renderer.setElementAttribute(anchor, 'href', '');

        var i = this._renderer.createElement(anchor, 'i');

        // add icon if it was provided
        let icon = menuItem.icon;

        if (icon) {
            this._renderer.setElementClass(i, 'zmdi', true);
            this._renderer.setElementClass(i, `zmdi-${icon}`, true);
        }

        // add title if it was provided
        let title = menuItem.title;

        if (title) {
            this._renderer.createText(anchor, title);
        }

        if (menuItem.children) {
            // add dropwn class
            this._renderer.setElementClass(ele, 'dropdown', true);
            this._renderer.setElementAttribute(ele, 'data-toggle', 'dropdown');

            let ul = this._renderer.createElement(ele, 'ul');
            this._renderer.setElementClass(ul, 'dropdown-menu', true);
            this._renderer.setElementClass(ul, 'dm-icon', true);
            this._renderer.setElementClass(ul, 'dropdown-menu-right', true);

            this.actionItem.children.forEach((item: IMenuItem) => {
                let li = this._renderer.createElement(ul, 'li');

                this._createAnchor(li, item);
            });
        }
    }

}
