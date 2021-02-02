import {Component} from '@angular/core';
import {Router} from '@angular/router';


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
              {title: 'Create', url: 'createUser'},
              ];

  constructor(private routing: Router){

  }


  goTo(url: { title: string; url: string }){
    this.routing.navigate([url.url]);
  }
}
