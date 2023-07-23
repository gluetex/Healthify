import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaskRoutePageRoutingModule } from './task-route-routing.module';

import { TaskRoutePage } from './task-route.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaskRoutePageRoutingModule
  ],
  declarations: [TaskRoutePage]
})
export class TaskRoutePageModule {}
