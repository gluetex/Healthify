import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-reset-password',
  templateUrl: './password-reset.page.html',
  styleUrls: ['./password-reset.page.scss'],
})
export class ResetPasswordPage {
  email: string = '';
  showSuccessToast = false;
  successMessage = 'Password reset email sent.';

  constructor(
    private router: Router,
    private toastController: ToastController
  ) {}

  sendResetEmail() {
    this.showToast();

    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 2000);
  }

  async showToast() {
    const toast = await this.toastController.create({
      message: this.successMessage,
      duration: 2000,
      color: 'medium',
    });
    toast.present();
  }
}
