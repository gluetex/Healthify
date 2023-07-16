import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  constructor(private navCtrl: NavController) {}

  navigateToMeditate() {
    this.navCtrl.navigateForward('/meditate');
  }

  navigateToJournal() {
    this.navCtrl.navigateForward('/journal');
  }

  // navigateToForm() {
  //   this.navCtrl.navigateForward('https://forms.gle/oEaLCBuLqx2rSsar8');
  // }
}
