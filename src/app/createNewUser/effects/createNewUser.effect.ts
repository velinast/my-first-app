import {Injectable} from '@angular/core';

import {Action} from '@ngrx/store';
import {CreateNewUserService} from '../createNewUser.service';
import {catchError, map, switchMap} from 'rxjs/operators';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import * as fromActions from '../actions/createNewUser.action';


class EffectError implements Action {
  readonly type = '[Error] Effect Error Create New User';
}
@Injectable()
export class CreateNewUserEffect {
  constructor(private actions$: Actions,
              private service: CreateNewUserService){}

  save$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromActions.save),
      switchMap(({form}) =>
        this.service.sendPostRequest(form).pipe(
          map((save: string) => {
            return fromActions.saveSuccess({save});
          }),
          catchError(() => of(new EffectError()))
        )
      )
    );
  });
}
