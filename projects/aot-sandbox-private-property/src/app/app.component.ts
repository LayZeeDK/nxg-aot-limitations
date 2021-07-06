import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<p>Hello, {{name}}</p>',
})
export class AppComponent {
  private name: string;

  constructor() {
    this.name = 'World';
  }
}
