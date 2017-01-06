import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'cropped-image',
    templateUrl: 'cropped-image.component.pug',
    host: { '[style.position]': 'relative' },
})
export class CroppedImageComponent {
    @Input() width = 96;
    @Input() image: string;
    @Input() text: string;
    @Input() alt = false;
    @Input() border = true;
    @Input() coefficient = 1;
    @Input() radius = 50;

    constructor(private _sanitizer: DomSanitizer) { }

    get imageUrl(): string {
        if (!this.image) { return null; }
        return `${this.image}?width=${this.ampedN}&height=${this.ampedN}`;
    }

    get ampedN(): number {
        return this._nearestMultipleOfTwo(this.width * 1.5);
    }

    get croppedImageStyle(): SafeStyle {
        let tickness = Math.round((this.width * 0.05) * this.coefficient) ;
        let opacity = this.alt ? 0.8 : 0.3;
        let borderStyle = this.border ? `border: ${tickness}px solid rgba(50, 50, 50, ${opacity});` : '';

        return this._sanitizer.bypassSecurityTrustStyle(`${borderStyle} object-fit: cover; margin: auto; border-radius: ${this.radius}%; 
                                                         position: relative; width: ${this.width}px; height: ${this.width}px;`);
    }

    get textMargin() {
        return Math.ceil((this.width * 0.06) * this.coefficient);
    }

    _nearestMultipleOfTwo(n: number): number {
      return  Math.ceil(n / 2) * 2;
    }
}
