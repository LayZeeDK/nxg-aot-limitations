import { Component } from '@angular/core';

const subject = 'World';
const failingGreeting = String.raw`Hello, ${subject}!`;
const workingGreeting = `Hello, ${subject}!`;
const workingTemplate = '<h1>{{ greeting }}</h1>';

@Component({
  selector: 'app-root',
  template: '<h1>' + failingGreeting + '</h1>',
  // template: workingTemplate,
})
export class AppComponent {
  // greeting = String.raw`Hello, ${subject}!`;
}
