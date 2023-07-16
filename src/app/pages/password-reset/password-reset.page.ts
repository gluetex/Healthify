import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-reset-password',
  templateUrl: './password-reset.page.html',
  styleUrls: ['./password-reset.page.scss'],
})
export class ResetPasswordPage {
  email: string='';
  showSuccessToast = false;
  successMessage = 'Password reset email sent.';

  constructor(private router: Router, private toastController: ToastController) {}

  sendResetEmail() {
    // Send password reset email logic here
    // You can implement the logic to send the reset email using your preferred method (e.g., HTTP request to an API)

    // Show success toast
    this.showToast();

    // Redirect to login page after a short delay
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 2000);
  }

  async showToast() {
    const toast = await this.toastController.create({
      message: this.successMessage,
      duration: 2000
    });
    toast.present();
  }
}
