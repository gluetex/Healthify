import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  constructor(private navCtrl: NavController) {}

  isLiked: boolean = false;

  likeCard() {
    this.isLiked = !this.isLiked;
    // Here you can perform any additional actions when the card is liked/unliked
  }
}
