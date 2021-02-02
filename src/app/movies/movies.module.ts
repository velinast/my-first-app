import {ModuleWithProviders, NgModule} from '@angular/core';
import {routing} from './movies.routing';
import {StoreModule} from '@ngrx/store';
import {feautureReducer} from './reducers/movies.reducer';
import {createEffect, EffectsModule} from '@ngrx/effects';
import {MoviesEffect} from './effects/movies.effect';
import {MoviesFacade} from './facade/movies.facade';
import {MoviesService} from './movies.service';

@NgModule({
  imports: [
    routing,
    StoreModule.forFeature('movies', feautureReducer),
    EffectsModule.forFeature([MoviesEffect])
  ],
  providers: [MoviesFacade, MoviesService]
})
export class MoviesModule {
  static forRoot(): ModuleWithProviders<MoviesModule> {
    return {
      ngModule: MoviesModule,
      providers: []
    };
  }
}
