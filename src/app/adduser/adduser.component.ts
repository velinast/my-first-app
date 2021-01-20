import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MoviesService} from '../movies.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html'
})
export class AdduserComponent implements OnInit {
  @Input() navArrays;
  // display: boolean = false;
  public display = false;
  form: FormGroup;
  director: Object[];
  movieName: any ;
  url: any;


  constructor(private moviesService: MoviesService,
              private routing: Router) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      'directorName': new FormControl(null, [Validators.required, Validators.minLength(3),
        Validators.maxLength(5)]),
      'email': new FormControl(null, Validators.required)
    });
  }

  // tslint:disable-next-line:ban-types
  showDialog(form: Object) {

    this.moviesService.getDirectorName(form['directorName']).subscribe((data:any[]) => {
      this.director = data;
      this.movieName = this.director.map(res => res["Title"]);
      this.display = true;
    });
  }
  goTo(event: Object){
    console.log(event);
    this.routing.navigate([event['url']]);
  }

  closeModal(event) {
    this.display = event;
  }

}
