import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-meditate',
  templateUrl: './meditate.page.html',
  styleUrls: ['./meditate.page.scss'],
})
export class MeditatePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  goBackAction(){
    this.navCtrl.navigateForward('/tabs/tab3');
  }

}
