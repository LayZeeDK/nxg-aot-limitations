import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { featureFlagsToken } from './app/feature-flags.token';
import { environment } from './environments/environment';

function loadFeatureFlags(): Promise<{ [feature: string]: boolean }> {
  return fetch('api/features').then((response) => response.json());
}

if (environment.production) {
  enableProdMode();
}

loadFeatureFlags()
  .then((featureFlags) =>
    platformBrowserDynamic().bootstrapModule(AppModule, {
      providers: [{ provide: featureFlagsToken, useValue: featureFlags }],
    })
  )

  .catch((err) => console.error(err));
