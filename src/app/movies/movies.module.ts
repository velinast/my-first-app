import {ModuleWithProviders, NgModule} from '@angular/core';
import {routing} from './movies.routing';

@NgModule({
  imports: [routing]
})
export class MoviesModule {
  static forRoot(): ModuleWithProviders<MoviesModule> {
    return {
      ngModule: MoviesModule,
      providers: []
    };
  }
}
