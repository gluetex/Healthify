import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  constructor(private navCtrl: NavController) {}

  navigateDailyAction() {

    this.navCtrl.navigateForward('/daily-task');
  }

  navigateWeeklyAction() {
    // Navigate to Page 2
    this.navCtrl.navigateForward('/weekly-task');
  }

  navigateMonthlyAction() {
    // Navigate to Page 3
    this.navCtrl.navigateForward('/monthly-task');
  }

  
}
