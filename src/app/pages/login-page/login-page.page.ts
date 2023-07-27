import { Component, OnInit } from '@angular/core';
import { NavController, ToastController  } from '@ionic/angular';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from '@angular/fire/auth';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {
  email!: string;
  password!: string;
  constructor(private navCtrl: NavController, private auth: Auth, private toastController: ToastController) { }

  ngOnInit() {
  }

  async loginAction() {
    try {
      const user = await signInWithEmailAndPassword(
        this.auth,
        this.email,
        this.password
      );
      console.log('User logged in:', user);
      this.presentToast('Logged in successfully'); // Show the toast
      this.navCtrl.navigateForward('/tabs/tab1');
    } catch (error) {
      console.error('Login error:', error);
      this.presentToast('Invalid Email or Password');
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1000, 
      position: 'bottom' 
    });
    toast.present();
  }

  resetAction(){
    this.navCtrl.navigateForward('/passwordReset');
  }

  registerAction(){
    this.navCtrl.navigateForward('/register');

  }
}
