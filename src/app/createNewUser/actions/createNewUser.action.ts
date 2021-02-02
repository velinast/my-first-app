import {createAction, props} from '@ngrx/store';

export const save = createAction('[Create new user] Create new user', props<{form: Object}>());
export const saveSuccess = createAction('[Create new user] Create new user SUCCESS', props<{ save: Object }>());
