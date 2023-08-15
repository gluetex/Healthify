import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
})
export class AvatarPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  dismissModal() {
    setTimeout(() => {}, 2000);
    this.modalCtrl.dismiss();
  }

  selectAvatar(avatarUrl: string) {
    this.modalCtrl.dismiss({
      selectedAvatar: avatarUrl
    });
  }

}
