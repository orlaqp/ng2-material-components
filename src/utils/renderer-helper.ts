import { Renderer } from '@angular/core';

export class RendererHelper {

    constructor(private _renderer: Renderer) { }

    addClass(ele: any, classNames: string): void {
        let r = this._renderer;
        let classes: string[] = classNames.split(' ');

        classes.forEach(c => {
            r.setElementClass(ele, c, true);
        });
    }

    addAttributes(ele: any, attrs: any): void {
        let r = this._renderer;

        for (let key in attrs) {
            r.setElementAttribute(ele, key, attrs[key]);
        }
    }

}
