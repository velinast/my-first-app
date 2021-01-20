import {ModuleWithProviders, NgModule} from '@angular/core';
import {routing} from './adduser.routing';
import {AddUserDialogComponent} from './addUserDialog/addUserDialog.component';
import {DialogModule} from 'primeng/dialog';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    routing,
    DialogModule,
    ReactiveFormsModule
  ],
  exports: [
    AddUserDialogComponent
  ],
  declarations: [
    AddUserDialogComponent
  ]

})
export class AdduserModule {
  static forRoot(): ModuleWithProviders<AdduserModule> {
    return {
      ngModule: AdduserModule,
      providers: []
    };
  }
}

