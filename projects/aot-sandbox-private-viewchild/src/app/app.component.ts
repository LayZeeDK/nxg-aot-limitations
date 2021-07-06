import { AfterViewInit, Component, ViewChild } from '@angular/core';

import { ChildDirective } from './child.directive';

@Component({
  selector: 'app-root',
  template: `Hello World <child-directive></child-directive>`,
})
export class AppComponent implements AfterViewInit {
  @ViewChild(ChildDirective) private child?: ChildDirective;

  ngAfterViewInit() {
    console.log(this.child?.value);
  }
}
