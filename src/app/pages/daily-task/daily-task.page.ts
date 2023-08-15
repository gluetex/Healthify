import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular'; 
interface TaskCard {
  title: string;
  description: string;
  requiredPresses: number;
  currentPresses: number;
  image: string;
}

@Component({
  selector: 'app-daily-task',
  templateUrl: './daily-task.page.html',
  styleUrls: ['./daily-task.page.scss'],
})
export class DailyTaskPage implements OnInit {
  progress: number = 0;

  constructor(private navCtrl: NavController, private storage: Storage) {}

  async ngOnInit() {
    await this.storage.create(); // Initialize the storage
    const storedTasks = await this.storage.get('taskCards');
    if (storedTasks) {
      this.taskCards = storedTasks;
      this.updateProgress();
    }
    this.scheduleResetAtMidnight();
  }

  goBackAction() {
    this.navCtrl.navigateForward('/tabs/tab2');
  }

  taskCards: TaskCard[] = [
    {
      title: 'Socialize',
      description: 'Have a conversation with 3 strangers today',
      requiredPresses: 3,
      currentPresses: 0,
      image: '../../assets/TaskImages/taskTalk.jpg',
    },
    {
      title: 'Take a Breath',
      description:
        'Practice five minutes of deep breathing or meditation in the morning and evening.',
      requiredPresses: 2,
      currentPresses: 0,
      image: '../../assets/TaskImages/breathTask.jpg',
    },
    {
      title: 'Move',
      description:
        'Engage in at least 30 minutes of physical exercise, such as walking, jogging, or cycling.',
      requiredPresses: 1,
      currentPresses: 0,
      image: '../../assets/TaskImages/exerciseTask.jpg',
    },
  ];

  onCardButtonClick(card: TaskCard) {
    if (card.currentPresses < card.requiredPresses) {
      card.currentPresses++;
      this.updateProgress();
      this.saveProgressToLocal(); // Save progress to local storage after each button click
    }
  }
  saveProgressToLocal() {
    this.storage.set('taskCards', this.taskCards);
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

  scheduleResetAtMidnight() {
    const now = new Date();
    const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
    const timeToMidnight = midnight.getTime() - now.getTime();
    
    setTimeout(() => {
      this.resetProgress();
      this.scheduleResetAtMidnight();  // Schedule the next reset after resetting
    }, timeToMidnight);
  }

  resetProgress() {
    this.taskCards.forEach(card => {
      card.currentPresses = 0;
    });
    this.updateProgress();
    this.saveProgressToLocal();
  }
}

