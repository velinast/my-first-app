import {Action, createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';
import * as fromActions from '../../createNewUser/actions/createNewUser.action';
import * as fromRoot from '../../reducers/app.store';

export interface CreateNewUserState {
  form: Object;
  save: Object;
}
export const initialState: CreateNewUserState = {
  form: null,
  save: null,
};

const reducer = createReducer(initialState,
  on(fromActions.save, (state, {form}) => ({...state, form })),
  on(fromActions.saveSuccess, (state, {save}) => ({...state, save}))
);

export interface State extends fromRoot.AppState  {
  'createUser': CreateNewUserState;
}
export const getCreateNewUserState = createFeatureSelector<CreateNewUserState>('createUser');
export const getCreateNewUserSave = createSelector(getCreateNewUserState, (state: CreateNewUserState) => state.save);

export function featureReducer(state: CreateNewUserState | undefined, action: Action) {
  return reducer(state, action);
}
