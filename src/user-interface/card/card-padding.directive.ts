import { Directive } from '@angular/core';

@Directive({
    selector: '[card-padding]',
    host: { '[class.card-padding]': 'true' },
})
export class CardPaddingDirective { }
