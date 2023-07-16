import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  loginAction(){

    this.navCtrl.navigateForward('/tabs/tab1');

  }
  resetAction(){
    this.navCtrl.navigateForward('/passwordReset');
  }
}
