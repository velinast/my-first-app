import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {ServerComponent} from './server.component';

const routes: Routes = [
  {path: '', component: ServerComponent}
];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);
