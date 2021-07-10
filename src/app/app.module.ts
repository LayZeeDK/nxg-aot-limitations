import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { textToken } from './text.token';

// error TS2454: Variable 'someText' is used before being assigned.
export let someText: string;

someText = 'Greetings from Angular';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [{ provide: textToken, useValue: someText }],
})
export class AppModule {}
