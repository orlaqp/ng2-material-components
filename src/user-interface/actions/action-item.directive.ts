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

    @HostListener('click', ['$event'])
    public onActionClicked($event: MouseEvent, menuItem?: IMenuItem): void {

        $event.preventDefault();

        let item: IMenuItem = menuItem ? menuItem : this.actionItem;

        // only send notification when the item does not have children
        if (!item.children) {
            this._actionsService.announceAction(item);
        }
    }

    private _createAnchor(ele: any, menuItem: IMenuItem, submenu: boolean = false) {
        var anchor = this._renderer.createElement(ele, 'a');
        this._renderer.setElementAttribute(anchor, 'href', '');

        if (submenu) {
            this._renderer.listen(anchor, 'click', (event: MouseEvent) => {
                this.onActionClicked(event, menuItem);
            });
        }

        // add icon if it was provided
        let icon = menuItem.icon;

        if (icon) {
            var i = this._renderer.createElement(anchor, 'i');

            this._renderer.setElementClass(i, 'zmdi', true);
            this._renderer.setElementClass(i, `zmdi-${icon}`, true);

            if (this._actionsService.showBig) {
                this._renderer.setElementClass(i, 'tm-icon', true);
            }
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

                this._createAnchor(li, item, true);
            });
        }
    }

}
