import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-task-route',
  templateUrl: './task-route.page.html',
  styleUrls: ['./task-route.page.scss'],
})
export class TaskRoutePage implements OnInit {
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  dailyTaskAction() {
    this.navCtrl.navigateForward('/daily-task');
  }
  weeklyTaskAction() {
    this.navCtrl.navigateForward('/weekly-task');
  }
  monthlyTaskAction() {
    this.navCtrl.navigateForward('/monthly-task');
  }
}
