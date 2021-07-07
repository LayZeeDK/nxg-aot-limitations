import { Component } from '@angular/core';

// ERROR: used before initialized
export let someTemplate: string;

// ERROR: undefined when used
someTemplate = '<h1>Greetings from Angular</h1>';

@Component({
  selector: 'my-variable-component',
  template: someTemplate,
})
export class MyVariableComponent {}
