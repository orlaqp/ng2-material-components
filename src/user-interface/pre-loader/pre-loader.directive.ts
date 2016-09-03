import { Directive, AfterViewInit, Input, ElementRef, Renderer } from '@angular/core';

@Directive({ selector: '[bwPreloader]' })
export class PreLoaderDirective implements AfterViewInit {
    @Input() preLoader: string; // xxl, xl, lg, sm, xs

    constructor(private _el: ElementRef, private _renderer: Renderer) { }

    ngAfterViewInit() {
        let r = this._renderer;
        let ele = this._el.nativeElement;

        r.setElementClass(ele, 'preloader', true);
        r.setElementClass(ele, 'pl-xxl', true);

        let svg = r.createElement(ele, 'svg');
        r.setElementClass(svg, 'pl-circular', true);
        r.setElementAttribute(svg, 'viewBox', '25 25 50 50');

        let circle = r.createElement(svg, 'circle');
        r.setElementClass(circle, 'plc-path', true);
        r.setElementAttribute(circle, 'cx', '50');
        r.setElementAttribute(circle, 'cy', '50');
        r.setElementAttribute(circle, 'r', '20');
    }
}
