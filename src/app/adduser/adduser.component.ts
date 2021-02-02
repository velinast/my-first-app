import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AppService} from '../app.service';
import {ActivatedRoute, Params, Router} from '@angular/router';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html'
})
export class AdduserComponent implements OnInit {
  @Input() navArrays;
  public display = false;
  form: FormGroup;
  director: Object[];
  movieName: any ;
  url: any;
  name: any;
  page: any;

  constructor(private moviesService: AppService,
              private routing: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      'directorName': new FormControl(null),
      'email': new FormControl(null)
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
    console.log(event)
    this.routing.navigate([event['url']]);
  }

  closeModal(event) {
    this.display = event;
  }
  redirectTo(director: Object){
    this.routing.navigate(['movies/director/', director['directorName']])
    console.log(director['directorName']);
  }
  redirectToDiffPage(directorName: Object){
    this.routing.navigate(['server'], { queryParams: { director: directorName['directorName']} });
    console.log(directorName['directorName']);
  }
}
