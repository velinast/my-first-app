import {RouterModule, Routes} from '@angular/router';
import {AdduserComponent} from './adduser.component';
import {ModuleWithProviders} from '@angular/core';

const routes: Routes = [
  {path: '', component: AdduserComponent}
];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);
