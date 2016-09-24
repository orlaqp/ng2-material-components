import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  template: require('./home.component.pug')(),
})
export class HomeComponent implements OnInit {
  constructor() {  }

  ngOnInit() {}
}
