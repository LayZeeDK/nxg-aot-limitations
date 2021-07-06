import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyComponent } from './my.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, MyComponent],
  imports: [BrowserModule],
})
export class AppModule {}
