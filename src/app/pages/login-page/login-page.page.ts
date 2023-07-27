// import { Component, OnInit } from '@angular/core';
// import { NavController, ToastController  } from '@ionic/angular';
// import {
//   Auth,
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
//   signOut
// } from '@angular/fire/auth';
// import { Storage } from '@ionic/storage';


// @Component({
//   selector: 'app-login-page',
//   templateUrl: './login-page.page.html',
//   styleUrls: ['./login-page.page.scss'],
// })
// export class LoginPagePage implements OnInit {
//   email!: string;
//   password!: string;
//   constructor(private navCtrl: NavController, private auth: Auth, private toastController: ToastController, public storage: Storage) { }

//   ngOnInit() {
//   }

//   async loginAction() {
//     try {
//       const user = await signInWithEmailAndPassword(
//         this.auth,
//         this.email,
//         this.password
//       );

    
            
//       this.presentToast('Logged in successfully');
//       this.navCtrl.navigateForward('/tabs/tab1');
//     } catch (error) {
//       console.error('Login error:', error);
//       this.presentToast('Invalid Email or Password');
//     }
//   }

//   async presentToast(message: string) {
//     const toast = await this.toastController.create({
//       message: message,
//       duration: 1000, 
//       position: 'bottom' 
//     });
//     toast.present();
//   }

//   resetAction(){
//     this.navCtrl.navigateForward('/passwordReset');
//   }

//   registerAction(){
//     this.navCtrl.navigateForward('/register');

//   }
// }

import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {
  email!: string;
  password!: string;

  constructor(
    private navCtrl: NavController,
    private auth: Auth,
    private toastController: ToastController,
  ) {}

  ngOnInit() {}

  async loginAction() {
    try {
      const user = await signInWithEmailAndPassword(
        this.auth,
        this.email,
        this.password
      );

      if (user && user.user) {
        const userId = user.user.uid;
        console.log('User ID:', userId);

        this.presentToast('Logged in successfully');
        this.navCtrl.navigateForward('/tabs/tab1');
      } else {
        console.log('User not found.');
        this.presentToast('Invalid Email or Password');
      }
    } catch (error) {
      console.error('Login error:', error);
      this.presentToast('Invalid Email or Password');
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1000,
      position: 'bottom',
    });
    toast.present();
  }

  resetAction() {
    this.navCtrl.navigateForward('/passwordReset');
  }

  registerAction() {
    this.navCtrl.navigateForward('/register');
  }
}
