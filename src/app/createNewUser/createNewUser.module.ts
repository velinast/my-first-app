import {ModuleWithProviders, NgModule} from '@angular/core';
import {routing} from '../createNewUser/createNewUser.routing';
import {StoreModule} from '@ngrx/store';
import {featureReducer} from './reducers/createNewUser.reducer';
import {EffectsModule} from '@ngrx/effects';
import {CreateNewUserEffect} from './effects/createNewUser.effect';
import {CreateNewUserFacade} from './facade/createNewUser.facade';
import {CreateNewUserService} from './createNewUser.service';

@NgModule({
  imports: [
    routing,
    StoreModule.forFeature('createUser', featureReducer),
    EffectsModule.forFeature([CreateNewUserEffect])
  ],
  providers: [CreateNewUserFacade, CreateNewUserService]
})
export class CreateNewUserModule {
  static forRoot(): ModuleWithProviders<CreateNewUserModule> {
    return {
      ngModule: CreateNewUserModule,
      providers: []
    };
  }
}
