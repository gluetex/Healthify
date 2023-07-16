import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonthlyTaskPageRoutingModule } from './monthly-task-routing.module';

import { MonthlyTaskPage } from './monthly-task.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonthlyTaskPageRoutingModule
  ],
  declarations: [MonthlyTaskPage]
})
export class MonthlyTaskPageModule {}
