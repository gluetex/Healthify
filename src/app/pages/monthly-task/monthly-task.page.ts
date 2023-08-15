import { Component, OnInit, OnDestroy  } from '@angular/core';
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
export class MonthlyTaskPage implements OnInit, OnDestroy  {
  progress: number = 0;
  constructor(private navCtrl: NavController) {}

  private resetInterval: any; 

  ngOnInit() {
    this.loadProgress();
    this.scheduleResetOnFirstOfMonth();
  }

  ngOnDestroy() {
    clearInterval(this.resetInterval); 
  }

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
      this.saveProgress(); 
    }
  }

  saveProgress() {
    localStorage.setItem('monthlyTasksProgress', JSON.stringify(this.taskCards));
  }

  loadProgress() {
    const savedProgress = localStorage.getItem('monthlyTasksProgress');

    if (savedProgress) {
      const parsedProgress: TaskCard[] = JSON.parse(savedProgress);
      this.taskCards = parsedProgress;
      this.updateProgress();
    }
  }

  scheduleResetOnFirstOfMonth() {
    this.resetInterval = setInterval(() => {
      const now = new Date();
      if (now.getDate() === 1 && now.getHours() === 0) { 
        this.resetProgress();
      }
    }, 60 * 60 * 1000); 
  }

  resetProgress() {
    this.taskCards.forEach(card => {
      card.currentPresses = 0;
    });
    this.updateProgress();
    this.saveProgress(); 
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
