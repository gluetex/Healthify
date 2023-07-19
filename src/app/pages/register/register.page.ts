import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private router: Router, private toastController: ToastController, private navCtrl: NavController) { }

  isToastOpen=false;
  showSuccessToast = false;
  successMessage = 'Registration success, check your e-mail';
  ngOnInit() {
  }

  registerAction(){

    this.showToast();

setTimeout(()=>{
  this.router.navigate(['/login']);
}, 3000);

  }

 async showToast(){
  const toast=await this.toastController.create({
    message: this.successMessage,
    duration:3000
  });
  toast.present();

  }

  redirectAction(){
    this.navCtrl.navigateForward('/login');
    }

}

