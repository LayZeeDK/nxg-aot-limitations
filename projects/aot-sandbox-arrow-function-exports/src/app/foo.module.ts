import { ModuleWithProviders, NgModule } from '@angular/core';

@NgModule({})
export class FooModule {
  static provideFoo(_foo: any): ModuleWithProviders<FooModule> {
    return {
      ngModule: FooModule,
      providers: [],
    };
  }
}
