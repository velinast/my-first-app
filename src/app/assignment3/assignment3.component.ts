import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment3.component.html',
  styles: [`
  .whiteText{
    color: white;
  }
  `]
})
export class Assignment3Component implements OnInit {
  initialText = '';
  triggerText = true;
  buttonName = 0;
  log = [];
  constructor() {
  }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  onTriggerDetails(){
    if (this.triggerText === true){
      this.initialText = '';
      this.triggerText = false;
    } else {
      this.initialText = 'Secret Password';
      this.triggerText = true;
    }
    this.buttonName ++;
    this.log.push(this.buttonName);
    console.log(this.log);
  }
}
