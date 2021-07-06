import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NameComponent } from './name.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, NameComponent],
  imports: [BrowserModule],
})
export class AppModule {}
