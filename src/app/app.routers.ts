import {RouterModule, Routes} from '@angular/router';

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
];
export const routing = RouterModule.forRoot(appRoutes);
