import {RouterModule, Routes} from '@angular/router';
import {CreateNewUserModule} from './createNewUser/createNewUser.module';

const appRoutes: Routes = [
  {path: 'home',
  loadChildren: () => import ('./home/home.module').then(m => m.HomeModule)
  },
  {path: 'user',
    loadChildren: () => import ('./adduser/adduser.module').then(m => m.AdduserModule)
  },
  {path: 'task',
    loadChildren: () => import ('./assignment3/assignment3.module').then(m => m.Assignment3Module)
  },
  {path: 'server',
    loadChildren: () => import ('./server/server.module').then(m => m.ServerModule)
  },
  {path: 'movies',
    loadChildren: () => import ('./movies/movies.module').then(m => m.MoviesModule)
  },
  {path: 'createUser',
    loadChildren: () => import ('./createNewUser/createNewUser.module').then(m => m.CreateNewUserModule)
  },
];
export const routing = RouterModule.forRoot(appRoutes);
