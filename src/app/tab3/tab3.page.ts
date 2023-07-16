import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private navCtrl: NavController) {}
  

  navigateToPage1() {
    // Navigate to Page 1
    this.navCtrl.navigateForward('/meditate');
  }

  navigateToPage2() {
    // Navigate to Page 2
    this.navCtrl.navigateForward('/journal');
  }

  navigateToPage3() {
    // Navigate to Page 3
    this.navCtrl.navigateForward('/form');
  }

}
