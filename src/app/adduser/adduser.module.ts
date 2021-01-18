import {ModuleWithProviders, NgModule} from '@angular/core';
import {routing} from './adduser.routing';

@NgModule({
  imports: [routing]

})
export class AdduserModule {
  static forRoot(): ModuleWithProviders<AdduserModule> {
    return {
      ngModule: AdduserModule,
      providers: []
    };
  }
}

