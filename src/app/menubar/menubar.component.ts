import {Component} from '@angular/core';
import {OnInit} from '@angular/core';

import {MenuItem} from 'primeng/api';

@Component({
selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {

  public items: MenuItem[];

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.items = [{
      label: 'File',
      items: [
        {label: 'New', icon: 'fa-plus'},
        {label: 'Open', icon: 'fa-download'}
      ]
    },
      {
        label: 'Edit',
        items: [
          {label: 'Undo', icon: 'fa-refresh'},
          {label: 'Redo', icon: 'fa-repeat'}
        ]
      }];
  }
}
