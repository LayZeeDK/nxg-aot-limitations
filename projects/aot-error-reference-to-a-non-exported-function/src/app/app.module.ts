import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

function myStrategy(): MyStrategy {
  return {
    aot: true,
  };
}

export abstract class MyStrategy {
  abstract aot: boolean;
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [{ provide: MyStrategy, useFactory: myStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
