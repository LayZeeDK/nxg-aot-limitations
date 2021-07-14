import { Component } from '@angular/core';

const subject = 'World';
const failingGreeting = String.raw`Hello, ${subject}!`;
const workingGreeting = `Hello, ${subject}!`;

@Component({
  selector: 'app-root',
  template: '<h1>' + failingGreeting + '</h1>',
})
export class AppComponent {}
