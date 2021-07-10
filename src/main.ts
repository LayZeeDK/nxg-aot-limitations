import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { featureFlagsToken } from './app/feature-flags.token';
import { MyService } from './app/my.service';
import { environment } from './environments/environment';

function loadFeatureFlags(): Promise<{ [feature: string]: boolean }> {
  return fetch('assets/features.json').then((response) => response.json());
}

if (environment.production) {
  enableProdMode();
}

loadFeatureFlags()
  .then((featureFlags) =>
    platformBrowserDynamic([
      { provide: featureFlagsToken, useValue: featureFlags },
      { provide: MyService },
    ]).bootstrapModule(AppModule)
  )

  .catch((err) => console.error(err));
