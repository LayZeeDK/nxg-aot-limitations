import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppService } from './app.service';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [
    {
      provide: AppService,
      useFactory: () => {
        return { name: 'world test' };
      },
    },
  ],
})
export class AppModule {}
