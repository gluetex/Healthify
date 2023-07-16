import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meditate',
  templateUrl: './meditate.page.html',
  styleUrls: ['./meditate.page.scss'],
})
export class MeditatePage implements OnInit {
  countdown: number = 900; // 15 minutes in seconds

  constructor() {}

  ngOnInit(): void {}

  startTimerAction() {
    this.startCountdown();
  }

  startCountdown(): void {
    setInterval(() => {
      this.countdown--;
    }, 1000);
  }

  formatCountdownTime(countdown: number): string {
    const minutes: number = Math.floor(countdown / 60);
    const seconds: number = countdown % 60;

    return `${this.formatNumber(minutes)}:${this.formatNumber(seconds)}`;
  }

  formatNumber(value: number): string {
    return value.toString().padStart(2, '0');
  }
}
