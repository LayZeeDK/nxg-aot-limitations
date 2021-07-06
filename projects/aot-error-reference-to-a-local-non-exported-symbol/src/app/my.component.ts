import { Component, InjectionToken } from '@angular/core';

// ERROR
let foo: number | undefined; // neither exported nor initialized

const Foo = new InjectionToken<number>('Foo');

@Component({
  selector: 'my-component',
  template: 'My, my, my!',
  providers: [{ provide: Foo, useValue: foo }],
})
export class MyComponent {}
