import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildDirective } from './child.directive';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, ChildDirective],
  imports: [BrowserModule],
})
export class AppModule {}
