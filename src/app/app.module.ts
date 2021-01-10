import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule} from '@angular/forms';
import {MenubarComponent} from './menubar/menubar.component';
import {TabMenuModule} from 'primeng/tabmenu';
import {ServerComponent} from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import {Assignment3Component} from './assignment3/assignment3.component';
import {HomeComponent} from './home/home.component';
import {AdduserComponent} from './adduser/adduser.component';



const appRoutes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'user', component: AdduserComponent },
  {path: 'task', component: Assignment3Component },
  {path: 'server', component: ServerComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    ServerComponent,
    ServersComponent,
    Assignment3Component,
    HomeComponent,
    AdduserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    TabMenuModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
