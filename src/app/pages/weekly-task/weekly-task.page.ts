import { Component, OnInit,OnDestroy  } from '@angular/core';
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
export class WeeklyTaskPage implements OnInit, OnDestroy  {
  progress: number = 0;
  constructor(private navCtrl: NavController) {}

  private resetInterval: any; // To store the reference for clearInterval later

  ngOnInit() {
    this.loadProgress();
    this.scheduleResetOnMonday();
  }

  ngOnDestroy() {
    clearInterval(this.resetInterval); // Clear the interval on component destruction
  }
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
      this.saveProgress(); // Save the progress to localStorage
    }
  }
  saveProgress() {
    localStorage.setItem('weeklyTasksProgress', JSON.stringify(this.taskCards));
  }
  loadProgress() {
    const savedProgress = localStorage.getItem('weeklyTasksProgress');

    if (savedProgress) {
      const parsedProgress: TaskCard[] = JSON.parse(savedProgress);
      this.taskCards = parsedProgress;
      this.updateProgress();
    }
  }

  // Schedule task reset every Monday
  scheduleResetOnMonday() {
    this.resetInterval = setInterval(() => {
      const now = new Date();
      // Check if today is Monday and the time is past 12am
      if (now.getUTCDay() === 1 && now.getUTCHours() === 0) {
        this.resetProgress();
      }
    }, 60 * 60 * 1000); // Check every hour
  }

  resetProgress() {
    this.taskCards.forEach(card => {
      card.currentPresses = 0;
    });
    this.updateProgress();
    this.saveProgress(); // Save the reset progress to localStorage
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
