import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { DataService, Journal } from 'src/app/services/data.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.page.html',
  styleUrls: ['./journal.page.scss'],
})
export class JournalPage implements OnInit {
  isToastOpen = false;
  journalContent!: string;

  constructor(
    private navCtrl: NavController,
    private toastController: ToastController,
    private dataService: DataService
  ) {
    this.dataService.getJournal().subscribe((res) => {
      console.log(res);
    });
  }

  ngOnInit() {}

  async saveAction() {
    const toast = await this.toastController.create({
      message: 'Saving...',
      duration: 2000,
      position: 'top',
    });
    await toast.present();

    this.saveJournalEntry();
  }

  private saveJournalEntry() {
    if (this.journalContent) {
      const journal: Journal = {
        content: this.journalContent,
      };
      this.dataService
        .addJournal(journal)
        .then(() => {
        })
        .catch((error) => {
          console.error('Error adding journal entry:', error);
        });
    } else {
    }
  }

 async dontSaveAction() {
  const toast = await this.toastController.create({
    message: 'Journal Did Not Saved',
    duration: 2000,
    position: 'top',
  });
  await toast.present();
    this.navCtrl.navigateForward('/tabs/tab2');
    
  }

  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} characters remaining`;
  }
}
