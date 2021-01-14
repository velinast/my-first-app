import {RouterModule, Routes} from '@angular/router';
import {Assignment3Component} from './assignment3.component';
import {ModuleWithProviders} from '@angular/core';

const routes: Routes = [
  { path: '', component: Assignment3Component}
  ];
export const routing: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);
