import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Foo } from './foo';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [{ provide: Foo, useValue: { 0: 'test' } }],
})
export class AppModule {}
