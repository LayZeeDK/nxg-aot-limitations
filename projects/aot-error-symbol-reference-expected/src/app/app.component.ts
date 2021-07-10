import { Component } from '@angular/core';

import { BaseComponent } from './base.component';
import { ParentComponent } from './parent.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent extends (true ? BaseComponent : ParentComponent) {
  title = 'aot-error-symbol-reference-expected';
}
