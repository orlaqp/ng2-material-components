import { Component, Input } from '@angular/core';

@Component({
    selector: 'card',
    templateUrl: 'card.component.pug',
})
export class CardComponent {
    @Input() depth: number;
    @Input() topDepth: number;

    get depthClass(): string {
        return this.depth ? `z-depth-${this.depth}` : '';
    }

    get topDepthClass(): string {
        return !this.depth && this.topDepth ? `z-depth-${this.topDepth}-top` : '';
    }
}
