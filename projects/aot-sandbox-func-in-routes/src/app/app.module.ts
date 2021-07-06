import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppViewComponent } from './app-view.component';
import { AppComponent } from './app.component';
import { routing } from './app.routes';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, AppViewComponent],
  imports: [BrowserModule, routing],
})
export class AppModule {}
