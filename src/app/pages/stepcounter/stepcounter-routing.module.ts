import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StepcounterPage } from './stepcounter.page';

const routes: Routes = [
  {
    path: '',
    component: StepcounterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StepcounterPageRoutingModule {}
