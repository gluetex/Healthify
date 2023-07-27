// import { Component, OnInit } from '@angular/core';
// import { AlertController, ToastController } from '@ionic/angular';
// import { clearGlobalAppDefaultCred } from 'firebase-admin/lib/app/credential-factory';
// import { DataService } from 'src/app/services/data.service';

// @Component({
//   selector: 'app-journal',
//   templateUrl: './journal.page.html',
//   styleUrls: ['./journal.page.scss'],
// })
// export class JournalPage implements OnInit {
//   isToastOpen = false;

//   constructor(private toastController: ToastController, private dataService: DataService, private alertCtrl: AlertController) {
//     this.dataService.getJournal().subscribe(res=>{
//       console.log(res);
//     })
//    }

//   ngOnInit() {
//   }

//   async dontSaveAction() {
//     const toast = await this.toastController.create({
//       message: 'Journal did not save!',
//       duration: 2000,
//       position: 'top',
//     });
//     await toast.present();
//   }

//   async saveAction() {
//     const toast = await this.toastController.create({
//       message: 'Saving...',
//       duration: 2000,
//       position: 'top', // Set the position to 'top'
//     });
//     await toast.present();
//   }

//   async addJournal(){

//     const alert=await this.alertCtrl.create({

//       header:'Add Journal',
//       inputs:[
//         {
//           name:'content',
//           type:'text',
//           placeholder:'Enter Journal'
//         }
//       ],
//       buttons:[
//         {
//           text:'Cancel',
//           role:'cancel',
//         },
//         {
//           text:'Add',
//           handler: (res)=>{
//             this.dataService.addJournal({content:res.text});
//           }
//         }
//       ]
//     });
//     await alert.present();

//   }


// }
//-------------------------------------------------------------------------------------------//
// import { Component, OnInit } from '@angular/core';
// import { AlertController, ToastController } from '@ionic/angular';
// import { DataService, Journal } from 'src/app/services/data.service';

// @Component({
//   selector: 'app-journal',
//   templateUrl: './journal.page.html',
//   styleUrls: ['./journal.page.scss'],
// })
// export class JournalPage implements OnInit {
//   isToastOpen = false;
//   journalContent!: string;

//   constructor(
//     private toastController: ToastController,
//     private dataService: DataService,
//     private alertCtrl: AlertController
//   ) {
//     this.dataService.getJournal().subscribe(res => {
//       console.log(res);
//     });
//   }

//   ngOnInit() {}

//   async dontSaveAction() {
//     const toast = await this.toastController.create({
//       message: 'Journal did not save!',
//       duration: 2000,
//       position: 'top',
//     });
//     await toast.present();
//   }

//   async saveAction() {
//     const toast = await this.toastController.create({
//       message: 'Saving...',
//       duration: 2000,
//       position: 'top',
//     });
//     await toast.present();
//   }

//   async addJournal() {
//     const alert = await this.alertCtrl.create({
//       header: 'Add Journal',
//       inputs: [
//         {
//           name: 'content',
//           type: 'text',
//           placeholder: 'Enter Journal',
//         },
//       ],
//       buttons: [
//         {
//           text: 'Cancel',
//           role: 'cancel',
//         },
//         {
//           text: 'Add',
//           handler: (res) => {
//             this.journalContent = res.content;
//             this.saveJournalEntry();
//           },
//         },
//       ],
//     });
//     await alert.present();
//   }

//   private saveJournalEntry() {
//     if (this.journalContent) {
//       const journal: Journal = {
//         content: this.journalContent,
//       };
//       this.dataService.addJournal(journal).then(() => {
//         // Journal entry saved successfully
//         // You can show a success toast or handle it accordingly
//       }).catch((error) => {
//         // Error occurred while saving the journal entry
//         // You can show an error toast or handle it accordingly
//         console.error('Error adding journal entry:', error);
//       });
//     } else {
//       // Journal content is empty, show a warning or handle it accordingly
//     }
//   }
// }


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
          // Journal entry saved successfully
          // You can show a success toast or handle it accordingly
        })
        .catch((error) => {
          // Error occurred while saving the journal entry
          // You can show an error toast or handle it accordingly
          console.error('Error adding journal entry:', error);
        });
    } else {
      // Journal content is empty, show a warning or handle it accordingly
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
