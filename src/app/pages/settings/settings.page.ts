import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Auth } from '@angular/fire/auth';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private auth: Auth
  ) {}


  ngOnInit() {
  }

  async signOut() {
    try {
      await this.auth.signOut();
      this.navCtrl.navigateForward('/login');  
    } catch (error) {
      console.error("Error signing out:", error);
    }
  }


}
