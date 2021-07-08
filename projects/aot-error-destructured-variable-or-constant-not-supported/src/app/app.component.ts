import { Component } from '@angular/core';

import { Bar, Foo } from './configuration';

@Component({
  selector: 'app-root',
  template: `
    <pre><code>
      bar: {{ bar | json }}
      foo: {{ foo | json }}
    </code></pre>
  `,
})
export class AppComponent {
  constructor(public bar: Bar, public foo: Foo) {}
}
