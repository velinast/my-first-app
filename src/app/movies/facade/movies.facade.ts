import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as fromActions from '../actions/movies.action';
import * as fromRoot from '../../reducers/app.store';
import * as fromReducer from '../reducers/movies.reducer';
import {skip} from 'rxjs/operators';

@Injectable()
export class MoviesFacade {

  constructor(private store: Store<fromRoot.AppState>) {
  }

  movieName$ = this.store.pipe(select(fromReducer.getMovieName));
  movie$ = this.store.pipe(select(fromReducer.getMovieDetails))

  getDirectorName(director: string){
  this.store.dispatch(fromActions.getDirector({director}));
  console.log(director);
  }

  sendGetRequest(){
    this.store.dispatch(fromActions.sendRequest());
  }
}
