import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyModuleComponent } from './my-module.component';
import { MyVariableComponent } from './my-variable.component';

@NgModule({
  declarations: [AppComponent, MyVariableComponent, MyModuleComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
