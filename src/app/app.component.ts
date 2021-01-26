import {Component, EventEmitter} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Import} from '@angular/core/schematics/utils/typescript/imports';
import {Url} from 'url';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'my-first-app';
  navArrays = [{title: 'Home', url: 'home'},
              {title: 'Add user', url: 'user'},
              {title: 'Task', url: 'task'},
              {title: 'Server', url: 'server'},
              {title: 'Movies', url: 'movies'},
              ];

  constructor(private routing: Router){

  }


  goTo(url: { title: string; url: string }){
    this.routing.navigate([url.url]);
  }
}
