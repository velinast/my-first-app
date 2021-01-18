import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {MoviesService} from '../movies.service';
import {Observable, Subject} from 'rxjs';
import {MoviesModel} from '../movies.model';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html'
})
export class AdduserComponent implements OnInit {
  display: boolean = false;
  form: FormGroup;
  director: Object[];
  movieName: any ;


  constructor(private moviesService: MoviesService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      'directorName': new FormControl(null)
    });
  }

  // tslint:disable-next-line:ban-types
  showDialog(form: Object) {
    this.display = true;
    this.moviesService.getDirectorName(form['directorName']).subscribe((data:any[]) => {
      console.log(data);
      this.director = data;
      this.movieName = this.director.map(res => res["Title"]);
      console.log(this.movieName);
    });

    console.log(form['directorName']);
  }
}
