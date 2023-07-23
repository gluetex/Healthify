import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {
  textareaContent: string = '';
  maxWordLimit: number = 100;
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  checkWordLimit() {
    const words = this.textareaContent.trim().split(/\s+/);
    if (words.length > this.maxWordLimit) {
      // If the word count exceeds the limit, truncate the text
      this.textareaContent = words.slice(0, this.maxWordLimit).join(' ');
    }
  }

  postSendAction() {
    this.navCtrl.navigateForward('/tabs/tab3');
  }
}
