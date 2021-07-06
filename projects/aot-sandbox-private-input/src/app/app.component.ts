import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `Hello <name [name]="name"></name>`,
})
export class AppComponent {
  name = 'World';
}
