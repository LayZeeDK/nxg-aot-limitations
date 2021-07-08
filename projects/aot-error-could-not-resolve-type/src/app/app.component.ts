import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `Name: {{ win.name }}`,
})
export class AppComponent {
  constructor(public win: Window) {}
}
