import { Component } from '@angular/core';

const expression = 'funky';
const raw = String.raw`A tagged template ${expression} string`;

@Component({
  selector: 'app-root',
  template: '<div>' + raw + '</div>',
})
export class AppComponent {}
