import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { mapToken } from './map.token';

export class Fooish {}

const name = 'baz';
const fooType = typeof Fooish;

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [
    { provide: mapToken, useValue: { foo: fooType, [name]: 'grunt' } },
  ],
})
export class AppModule {}
