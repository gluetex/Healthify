import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { StepcounterPageRoutingModule } from './stepcounter-routing.module';

import { StepcounterPage } from './stepcounter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StepcounterPageRoutingModule
  ],
  declarations: [StepcounterPage],
})
export class StepcounterPageModule {}
