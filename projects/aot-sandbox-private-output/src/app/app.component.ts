import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `Hello <name (onClicked)="onClicked($event)"></name>`,
})
export class AppComponent {
  onClicked(clicked: boolean) {
    console.log('clicked:', clicked);
  }
}
