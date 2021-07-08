import { Component, Inject } from '@angular/core';

import { BaseColor, DangerColor, StrongColor } from './colors';

@Component({
  selector: 'app-root',
  template: `
    <pre><code>
      Base color: {{baseColor}}
      Danger color: {{dangerColor}}
      Strong color: {{strongColor}}
    </code></pre>
  `,
})
export class AppComponent {
  constructor(
    @Inject(BaseColor) public baseColor: number,
    @Inject(DangerColor) public dangerColor: number,
    @Inject(StrongColor) public strongColor: number
  ) {}
}
