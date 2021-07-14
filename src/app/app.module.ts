import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { featureFlagInitializer } from './feature-flag.initializer';
import { textToken } from './text.token';

// error TS2454: Variable 'someText' is used before being assigned.
export let someText: string;

someText = 'Greetings from Angular';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [
    featureFlagInitializer,
    { provide: textToken, useValue: someText },
  ],
})
export class AppModule {}
