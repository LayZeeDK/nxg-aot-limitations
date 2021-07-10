import { Component, Inject } from '@angular/core';

import { featureFlagsToken } from './feature-flags.token';
import { MyService } from './my.service';
import { textToken } from './text.token';

@Component({
  selector: 'app-root',
  template: `
    <p>Text: {{ text }}</p>
    <pre><code>{{ features | json }}</code></pre>
  `,
})
export class AppComponent {
  constructor(
    @Inject(textToken) public text: string,
    @Inject(featureFlagsToken) public features: { [feature: string]: boolean },
    myService: MyService
  ) {}
}
