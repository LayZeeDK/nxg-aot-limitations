import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PaneDirective } from './pane.directive';
import { TabComponent } from './tab.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, TabComponent, PaneDirective],
  imports: [BrowserModule],
})
export class AppModule {}
