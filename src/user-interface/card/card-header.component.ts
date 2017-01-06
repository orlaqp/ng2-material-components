import { Component, AfterViewInit, Input } from '@angular/core';

@Component({
    selector: 'card-header',
    templateUrl: 'card-header.component.pug',
})
export class CardHeaderComponent implements AfterViewInit {

    @Input() padded: boolean = false;
    @Input() color: string = 'default';

    ngAfterViewInit() { }

    get defaultHeader(): boolean {
        return this.color === 'default';
    }

    get customColor(): string {
        if (this.color === 'default' || this.color === 'white') {
            return '';
        }

        return 'bgm-' + this.color;
    }

}
