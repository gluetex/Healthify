import { Component, OnDestroy } from '@angular/core';
import { Howl } from 'howler';

@Component({
  selector: 'app-meditate',
  templateUrl: './meditate.page.html',
  styleUrls: ['./meditate.page.scss'],
})
export class MeditatePage implements OnDestroy {
  countdown: number = 900;
  private sound: Howl;
  private interval: any;
  timerRunning: boolean = false;

  constructor() {
    this.sound = new Howl({
      src: ['../../assets/MeditationMusic/meditationMusic.mp3'],
    });
  }

  playMusic() {
    if (!this.sound.playing()) {
      this.sound.play();
    } else {
      this.sound.play(this.sound.seek());
    }
  }

  stopMusic() {
    this.sound.stop();
  }

  startTimerAction() {
    this.startCountdown();
    this.playMusic();
    this.timerRunning = true;
  }

  stopTimerAction() {
    this.stopMusic();
    this.timerRunning = false;
    this.clearInterval();
  }

  resetTimerAction() {
    this.stopTimerAction();
    this.countdown = 900;
  }

  startCountdown(): void {
    this.clearInterval();
    this.interval = setInterval(() => {
      if (this.timerRunning) {
        this.countdown--;
        if (this.countdown <= 0) {
          this.stopTimerAction();
        }
      }
    }, 1000);
  }

  clearInterval() {
    clearInterval(this.interval);
  }

  formatCountdownTime(countdown: number): string {
    const minutes: number = Math.floor(countdown / 60);
    const seconds: number = countdown % 60;

    return `${this.formatNumber(minutes)}:${this.formatNumber(seconds)}`;
  }

  formatNumber(value: number): string {
    return value.toString().padStart(2, '0');
  }

  ngOnDestroy() {
    this.clearInterval();
  }
}
