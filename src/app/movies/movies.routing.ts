import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {MoviesComponent} from './movies.component';

const routes: Routes = [
  {path: '',
    component: MoviesComponent,
    children: [
      {
        path: 'director/:name',
        component: MoviesComponent
      }
    ]}
];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);
