import {ModuleWithProviders, NgModule} from '@angular/core';
import {routing} from './assignment3.routing';

@NgModule({
  imports: [ routing ]
})
export class Assignment3Module {
  static forRoot(): ModuleWithProviders<Assignment3Module>{
    return {
      ngModule: Assignment3Module,
      providers: []
    };
  }
}
