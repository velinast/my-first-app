import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import {MoviesModel} from '../movies.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MoviesService{
  urlRoot = 'http://localhost:3000/movies';
  constructor(private http: HttpClient) {
  }

  sendGetRequest() {
    return this.http.get(this.urlRoot);
  }

  getDirectorName(director: string): Observable<MoviesModel[]>{
    const url = `${this.urlRoot}?Director=${director}`;
    return this.http.get< MoviesModel[]>(url).pipe(
      tap(res => res)
    );
  }
  // getDirectorName(director){
  //   let apiUrl = `${this.urlRoot}?Director=${director}`;
  //   return this.http.get(this.apiURL).pipe(
  //     map((response: Response) => response.json())
  //   );
  // }

}
