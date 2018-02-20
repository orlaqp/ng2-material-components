import { Component, Input } from '@angular/core';

@Component({
  selector: 'bw-preloader',
  templateUrl: 'preloader.component.pug',
})
export class PreloaderComponent {
    @Input() class: string;
    @Input() color: string; // red, blue, green, yellow, bluegray, amber, teal, gray, pink, purple

}
