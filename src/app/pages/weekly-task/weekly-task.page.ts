import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

interface TaskCard {
  title: string;
  description: string;
  requiredPresses: number;
  currentPresses: number;
  image: string;
}

@Component({
  selector: 'app-weekly-task',
  templateUrl: './weekly-task.page.html',
  styleUrls: ['./weekly-task.page.scss'],
})
export class WeeklyTaskPage implements OnInit {
  progress: number = 0;
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  goBackAction() {
    this.navCtrl.navigateForward('/tabs/tab2');
  }

  taskCards: TaskCard[] = [
    {
      title: 'Stay In Touch ',
      description:
        'Spend time in nature, whether it is going for a hike, visiting a park, or gardening.',
      requiredPresses: 1,
      currentPresses: 0,
      image: '../../assets/TaskImages/natureTask.jpg',
    },
    {
      title: 'Be Kind',
      description: 'Engage in a random act of kindness for someone else.',
      requiredPresses: 1,
      currentPresses: 0,
      image: '../../assets/TaskImages/kindnessTask.jpg',
    },
    {
      title: 'Meet Up!',
      description:
        'Engage in a social outing or activity, such as meeting a friend for coffee or attending a social event.',
      requiredPresses: 1,
      currentPresses: 0,
      image: '../../assets/TaskImages/friendsTask.jpg',
    },
  ];

  onCardButtonClick(card: TaskCard) {
    if (card.currentPresses < card.requiredPresses) {
      card.currentPresses++;
      this.updateProgress();
    }
  }

  getProgressPercentage(card: TaskCard): string {
    const progressPercentage = Math.round(
      (card.currentPresses / card.requiredPresses) * 100
    );
    return `${progressPercentage}%`;
  }

  updateProgress() {
    const totalTasks = this.taskCards.length;
    let completedTasks = 0;

    for (const card of this.taskCards) {
      if (card.currentPresses >= card.requiredPresses) {
        completedTasks++;
      }
    }

    this.progress = Math.round((completedTasks / totalTasks) * 100);
  }
}
