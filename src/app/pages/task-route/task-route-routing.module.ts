import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskRoutePage } from './task-route.page';

const routes: Routes = [
  {
    path: '',
    component: TaskRoutePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskRoutePageRoutingModule {}
