import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TabMenuModule} from 'primeng/tabmenu';
import {HttpClientModule} from '@angular/common/http';
import {DialogModule} from 'primeng/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import {MenubarComponent} from './menubar/menubar.component';
import {ServerComponent} from './server/server.component';
import {ServersComponent} from './servers/servers.component';
import {Assignment3Component} from './assignment3/assignment3.component';
import {HomeComponent} from './home/home.component';
import {AdduserComponent} from './adduser/adduser.component';
import { MoviesComponent } from './movies/movies.component';

import {routing} from './app.routers';


@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    ServerComponent,
    ServersComponent,
    Assignment3Component,
    HomeComponent,
    AdduserComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    TabMenuModule,
    routing,
    TableModule,
    HttpClientModule,
    ReactiveFormsModule,
    DialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
