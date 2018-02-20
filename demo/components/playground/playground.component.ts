import {Component} from '@angular/core';

@Component({
  template: require('./playground.component.jade')(),
})
export class PlaygroundComponent {
    tabDisabled = true;

    toggleDisabled() {
        this.tabDisabled = !this.tabDisabled;
    }
}

