import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooModule } from './foo.module';
import { ErrorEventHandlers } from './handlers';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [BrowserModule, FooModule.provideFoo(ErrorEventHandlers)],
})
export class AppModule {}
