import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import {
  Auth,
  createUserWithEmailAndPassword,
} from "@angular/fire/auth";
import { getFirestore } from 'firebase/firestore';
import { setDoc, doc, collection } from "firebase/firestore";

import { initializeApp } from 'firebase/app';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  username!: string;
  email!: string;
  password!: string;
  private db: any;


  constructor(private router: Router,
     private toastController: ToastController, 
     private navCtrl: NavController, private auth: Auth,
     ) { 
      const firebaseConfig = {
        apiKey: "AIzaSyAhwUQ4dyWspAU53ErwArgyXhl-ZzZNw2I",
        authDomain: "healthify-78015.firebaseapp.com",
        projectId: "healthify-78015",
        storageBucket: "healthify-78015.appspot.com",
        messagingSenderId: "307872925519",
        appId: "1:307872925519:web:74d67cc5cbf3091704a73a",
        measurementId: "G-09F20RSR0T"    };

      const app = initializeApp(firebaseConfig);
      this.db = getFirestore(app);

     }

  isToastOpen=false;
  showSuccessToast = false;
  successMessage = 'Registration success, check your e-mail';
  ngOnInit() {
  }

  async registerAction() {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        this.auth,
        this.email,
        this.password
      );
      
      const userId = userCredential.user.uid; // Getting user ID
      
      const userDetail = {
        email: this.email,
        username: this.username,
        posts: [] // Initializing an empty posts array
      };
      
      const userRef = doc(this.db, "users", userId); // Using user ID as the document name
      await setDoc(userRef, userDetail);
      
      this.presentToast('Signup success');
      this.navCtrl.navigateForward('/login');
      return userCredential;
    } catch (error) {
      console.error("Error during registration:", error);
      this.presentToast('Signup failed'); // Modify the message based on your needs
      return null;
    }
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

