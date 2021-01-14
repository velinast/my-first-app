import {ModuleWithProviders, NgModule} from '@angular/core';
import {routing} from './server.routing';

@NgModule({
  imports: [routing]
})
export class ServerModule {
  static forRoot(): ModuleWithProviders<ServerModule> {
    return {
      ngModule: ServerModule,
      providers: []
    };
  }
}
