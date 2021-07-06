import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NameDirective } from './name.directive';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, NameDirective],
  imports: [BrowserModule],
})
export class AppModule {}
