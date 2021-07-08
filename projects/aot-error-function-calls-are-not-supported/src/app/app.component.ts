import { Component } from '@angular/core';

import { SomeValue } from './some-value';

@Component({
  selector: 'app-root',
  template: `AOT: {{ someValue.aot }}`,
})
export class AppComponent {
  constructor(public someValue: SomeValue) {}
}
