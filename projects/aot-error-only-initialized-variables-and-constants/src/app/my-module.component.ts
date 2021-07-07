import { Component } from '@angular/core';

import { someTemplate } from './config';

// ERROR - not initialized there either
@Component({
  selector: 'my-module-component',
  template: someTemplate,
})
export class MyModuleComponent {}
