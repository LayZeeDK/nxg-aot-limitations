import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Bar, configuration, Foo } from './configuration';

const { bar, foo } = configuration;

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [
    { provide: Bar, useValue: bar },
    { provide: Foo, useValue: foo },
  ],
})
export class AppModule {}
