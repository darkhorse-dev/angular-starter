import { Routes, RouterModule } from '@angular/router';
import { NoContent } from './no-content';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '**',    component: NoContent }
];
