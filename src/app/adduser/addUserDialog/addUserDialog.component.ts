import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-add-user-dialog',
  templateUrl: './addUserDialog.component.html'
})

export class AddUserDialogComponent implements OnInit{
  // @Input() display: boolean;
  @Input() movieName;
  @Input() display: boolean = false;
  @Output() hideModal: EventEmitter<boolean> = new EventEmitter();
  @Output() goToPage: EventEmitter<object> = new EventEmitter();

  dialogForm: FormGroup;

  ngOnInit(): void {
    this.dialogForm = new FormGroup({
      'url': new FormControl(null)
    });
  }

  getPage(form: Object){
    console.log(form);
    this.goToPage.emit(form);
  }
  hideInfo(): void {
    this.display = false;
    this.hideModal.emit(this.display);
    console.log('false');
  }
}
