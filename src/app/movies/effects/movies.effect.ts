import {Injectable} from '@angular/core';

import {Action} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import * as fromActions from '../actions/movies.action';
import {MoviesService} from '../movies.service';

class EffectError implements Action {
  readonly type = '[Error] Effect Error Movies';
}
@Injectable()
export class MoviesEffect {
  constructor(private actions$: Actions,
              private service: MoviesService) {
  }
  getDirector$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromActions.getDirector),
      switchMap(({director}) =>
        this.service.getDirectorName(director).pipe(
          map(movieName => {
            return fromActions.getDirectorSuccess({movieName});
          }),
          catchError(() => of(new EffectError()))
        )
      )
    );
  });

  getDetails$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromActions.sendRequest),
      switchMap(() =>
        this.service.sendGetRequest().pipe(
          map((movie: Object[]) => {
            return fromActions.sendRequestSuccess({movie});
          }),
          catchError(() => of(new EffectError()))
        )
      )
    );
  });
}

