import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { foo } from './foo';
import { FooModule } from './foo.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FooModule.provideFoo(foo)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
