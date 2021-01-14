import {ModuleWithProviders, NgModule} from '@angular/core';
import {routing} from './home.routing';

@NgModule({
  imports: [routing]
})
export class HomeModule {
  static forRoot(): ModuleWithProviders<HomeModule>{
    return {
      ngModule: HomeModule,
      providers: []
    };
  }
}
