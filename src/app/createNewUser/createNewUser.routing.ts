import {RouterModule, Routes} from '@angular/router';
import {CreateNewUserComponent} from './createNewUser.component';
import {ModuleWithProviders} from '@angular/core';

const routes: Routes = [
  {path: '',
    component: CreateNewUserComponent,
  }
];
export const routing: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);
