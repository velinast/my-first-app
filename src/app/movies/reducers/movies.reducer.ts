import * as fromActions from '../actions/movies.action';
import * as fromRoot from '../../reducers/app.store';
import {Action, createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';
import {state} from '@angular/animations';


export interface MoviesState {
  movieName: Object[];
  movie: Object[];
}
export const initialState: MoviesState = {
  movieName: null,
  movie: null,
};
const reducer = createReducer(initialState,
  on(fromActions.getDirector, (state, {}) => ({...state})),
  on(fromActions.getDirectorSuccess, (state, {movieName}) => ({...state, movieName})),
  on(fromActions.sendRequest, (state, {}) => ({...state})),
  on(fromActions.sendRequestSuccess, (state, {movie}) => ({...state, movie}))
);
export interface State extends fromRoot.AppState  {
  'movies': MoviesState;
}
export const getMovieState = createFeatureSelector<MoviesState>('movies');

export const getMovieName = createSelector(getMovieState, (state: MoviesState) => state.movieName);
export const getMovieDetails = createSelector(getMovieState, (state: MoviesState) => state.movie);

export function feautureReducer(state: MoviesState | undefined, action: Action){
  return reducer(state, action);
}
