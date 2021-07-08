import { Component } from '@angular/core';

import { Foo } from './foo';

@Component({
  selector: 'app-root',
  template: `<pre><code>{{ foo | json }}</code></pre>`,
})
export class AppComponent {
  constructor(public foo: Foo) {}
}
