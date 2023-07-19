import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.page.html',
  styleUrls: ['./journal.page.scss'],
})
export class JournalPage implements OnInit {
  isToastOpen = false;

  constructor(private toastController: ToastController) { }

  ngOnInit() {
  }

  async dontSaveAction() {
    const toast = await this.toastController.create({
      message: 'Journal did not save!',
      duration: 2000,
      position: 'top', // Set the position to 'top'
    });
    await toast.present();
  }

  async saveAction() {
    const toast = await this.toastController.create({
      message: 'Saving...',
      duration: 2000,
      position: 'top', // Set the position to 'top'
    });
    await toast.present();
  }
}
