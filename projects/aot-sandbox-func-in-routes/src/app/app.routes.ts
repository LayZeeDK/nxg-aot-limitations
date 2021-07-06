import { RouterModule, Routes } from '@angular/router';

import { AppFakeViewComponent } from './app-fake-view.component';
import { AppViewComponent } from './app-view.component';

function someLoader(someVariable: boolean): Routes {
  if (someVariable) {
    return [
      {
        path: '',
        component: AppFakeViewComponent,
      },
    ];
  } else {
    return [
      {
        path: '',
        component: AppViewComponent,
      },
    ];
  }
}

let fakeWorld = true;

function random() {
  const isFake = Math.round(Math.random()) === 1 ? true : false;

  return someLoader(isFake);
}
const SAMPLE_APP_ROUTES: Routes = random();

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(SAMPLE_APP_ROUTES);
