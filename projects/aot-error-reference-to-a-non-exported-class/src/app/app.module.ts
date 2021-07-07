import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

abstract class MyStrategy {}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [{ provide: MyStrategy, useValue: { aot: true } }],
  bootstrap: [AppComponent],
})
export class AppModule {}
