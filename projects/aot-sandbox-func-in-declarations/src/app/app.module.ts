import { NgModule, Type } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppFakeComponent } from './app-fake.component';
import { AppComponent } from './app.component';

function failingLoader(someVariable: boolean): Type<any>[] {
  if (someVariable) {
    return [AppFakeComponent];
  } else {
    return [AppComponent];
  }
}

function passingLoader(someVariable: boolean): Type<any>[] {
  return someVariable ? [AppFakeComponent] : [AppComponent];
}

let fakeWorld = true;

@NgModule({
  bootstrap: failingLoader(fakeWorld),
  declarations: passingLoader(fakeWorld),
  imports: [BrowserModule],
})
export class AppModule {}
