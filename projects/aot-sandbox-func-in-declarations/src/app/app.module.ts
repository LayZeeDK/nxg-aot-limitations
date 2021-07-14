import { NgModule, Type } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { environment } from '../environments/environment';
import { AppFakeComponent } from './app-fake.component';
import { AppComponent } from './app.component';

function failingDetermineAppComponent(isDevelopment: boolean): Type<any>[] {
  if (isDevelopment) {
    return [AppFakeComponent];
  } else {
    return [AppComponent];
  }
}

function passingDetermineAppComponent(isDevelopment: boolean): Type<any>[] {
  return isDevelopment ? [AppFakeComponent] : [AppComponent];
}

const developmentEnvironment = environment.production === false;

@NgModule({
  bootstrap: failingDetermineAppComponent(developmentEnvironment),
  declarations: passingDetermineAppComponent(developmentEnvironment),
  imports: [BrowserModule],
})
export class AppModule {}
