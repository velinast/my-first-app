import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CreateNewUserService {
  constructor(private http: HttpClient) {
  }
  sendPostRequest(user: Object) {
    return this.http.post('http://localhost:3000/users', user, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}
