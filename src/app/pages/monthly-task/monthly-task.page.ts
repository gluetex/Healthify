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
  selector: 'app-monthly-task',
  templateUrl: './monthly-task.page.html',
  styleUrls: ['./monthly-task.page.scss'],
})
export class MonthlyTaskPage implements OnInit {
  progress: number = 0;
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  goBackAction() {
    this.navCtrl.navigateForward('/tabs/tab2');
  }
  taskCards: TaskCard[] = [
    {
      title: 'Take Care of Yourself',
      description:
        'Adapt a selfcare routine such as applying morning routine, meditation, exercising etc. for a month.',
      requiredPresses: 28,
      currentPresses: 0,
      image: '../../assets/TaskImages/selfcareTask.jpeg',
    },
    {
      title: 'Keep Record',
      description:
        'Write down your thoughts, about yourself, about your day etc. for a month.',
      requiredPresses: 28,
      currentPresses: 0,
      image: '../../assets/TaskImages/journalTask.jpg',
    },
    {
      title: 'Plan Ahead',
      description: 'Write down your future plans, review existing plans.',
      requiredPresses: 1,
      currentPresses: 0,
      image: '../../assets/TaskImages/planTask.jpg',
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
