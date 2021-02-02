import {createAction, props} from '@ngrx/store';

export const getDirector = createAction('[Movies] Get Director', props<{director: string}>());
export const getDirectorSuccess = createAction('[Movies] Get Director Success', props<{movieName: Object[]}>());
export const sendRequest = createAction('[Movies] Send get request');
export const sendRequestSuccess = createAction('[Movies] Send get request Success', props<{movie: Object[]}>());
