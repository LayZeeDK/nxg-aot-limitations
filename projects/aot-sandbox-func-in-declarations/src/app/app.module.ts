import { NgModule, Type } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppFakeComponent } from './app-fake.component';
import { AppComponent } from './app.component';

function someLoader(someVariable: boolean): Type<any>[] {
  if (someVariable) {
    return [AppFakeComponent];
  } else {
    return [AppComponent];
  }
}

let fakeWorld = true;

@NgModule({
  bootstrap: someLoader(fakeWorld),
  declarations: someLoader(fakeWorld),
  imports: [BrowserModule],
})
export class AppModule {}
