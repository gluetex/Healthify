import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  constructor(private navCtrl: NavController) {}

  navigateToTasks() {
    this.navCtrl.navigateForward('/task-route');
  }

  navigateToMeditate() {
    this.navCtrl.navigateForward('/meditate');
  }

  navigateToJournal() {
    this.navCtrl.navigateForward('/journal');
  }

  navigateToForm() {
    this.navCtrl.navigateForward('/form');
  }

  navigateToPedometer() {
    this.navCtrl.navigateForward('/stepcounter');
  }
}
