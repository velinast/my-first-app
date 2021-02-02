import {Component, OnInit} from '@angular/core';
import { Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {CreateNewUserService} from './createNewUser.service';
import {CreateNewUserFacade} from './facade/createNewUser.facade';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-create-new-user',
  templateUrl: './createNewUser.component.html'
})
export class CreateNewUserComponent implements OnInit{
  form: FormGroup;
  private saveResult$: Observable<Object>;
  private saveResultSub: Subscription;

  constructor(private routing: Router,
              private createNewUserService: CreateNewUserService,
              private facade: CreateNewUserFacade) {

    this.saveResult$ = this.facade.save$;
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      'userName': new FormControl(null),
      'email': new FormControl(null),
      'id': new FormControl(null)
    });
  }

  save(form: Object){
    this.facade.sendPostRequest(form);
    this.saveResultSub = this.saveResult$.subscribe(
      (data: Object) => {
        console.log(data);
      });
    // this.createNewUserService.sendPostRequest(form).subscribe(
    //   (data: Object) => {
    //     console.log(data);
    //   }
    // );
  }

}
