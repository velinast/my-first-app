import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AdduserComponent} from './adduser/adduser.component';
import {Assignment3Component} from './assignment3/assignment3.component';
import {ServerComponent} from './server/server.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'user', component: AdduserComponent },
  {path: 'task', component: Assignment3Component },
  {path: 'server', component: ServerComponent },
];
export const routing = RouterModule.forRoot(appRoutes);
