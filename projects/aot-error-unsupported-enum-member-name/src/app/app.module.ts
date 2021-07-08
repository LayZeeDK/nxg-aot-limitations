import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BaseColor, Colors, DangerColor, StrongColor } from './colors';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [
    { provide: BaseColor, useValue: Colors.White },
    { provide: DangerColor, useValue: Colors.Red },
    { provide: StrongColor, useValue: Colors.Blue },
  ],
})
export class AppModule {}
