import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from "@angular/fire/auth";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  email!: string;
  password!: string;
  constructor(private router: Router, private toastController: ToastController, private navCtrl: NavController, private auth: Auth) { }

  isToastOpen=false;
  showSuccessToast = false;
  successMessage = 'Registration success, check your e-mail';
  ngOnInit() {
  }

 
  async registerAction(){

    const user = await createUserWithEmailAndPassword(
      this.auth,
      this.email,
      this.password
      );
      this.presentToast('Signup success');
      this.navCtrl.navigateForward('/login');
    return user;
   
  }

  redirectAction(){
    this.navCtrl.navigateForward('/login');
    }

    async presentToast(message: string) {
      const toast = await this.toastController.create({
        message: message,
        duration: 1000,
        position: 'bottom',
      });
      toast.present();
    }
  
}

