import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as fromRoot from '../../reducers/app.store';
import * as fromReducer from '../reducers/createNewUser.reducer';
import * as fromActions from '../actions/createNewUser.action';

@Injectable()
export class CreateNewUserFacade {


  constructor(private store: Store<fromRoot.AppState>){}
  save$ = this.store.pipe(select(fromReducer.getCreateNewUserSave));

  sendPostRequest(form: Object){
    this.store.dispatch(fromActions.save({form}));
  }
}


