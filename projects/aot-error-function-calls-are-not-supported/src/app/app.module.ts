import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { calculateValue } from './calculate-value';
import { SomeValue } from './some-value';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [{ provide: SomeValue, useValue: calculateValue() }],
})
export class AppModule {}
