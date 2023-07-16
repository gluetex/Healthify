import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeeklyTaskPage } from './weekly-task.page';

const routes: Routes = [
  {
    path: '',
    component: WeeklyTaskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeeklyTaskPageRoutingModule {}
