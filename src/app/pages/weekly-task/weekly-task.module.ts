import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeeklyTaskPageRoutingModule } from './weekly-task-routing.module';

import { WeeklyTaskPage } from './weekly-task.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeeklyTaskPageRoutingModule
  ],
  declarations: [WeeklyTaskPage]
})
export class WeeklyTaskPageModule {}
