import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonthlyTaskPage } from './monthly-task.page';

const routes: Routes = [
  {
    path: '',
    component: MonthlyTaskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonthlyTaskPageRoutingModule {}
