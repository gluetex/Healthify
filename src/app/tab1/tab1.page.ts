import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

interface leftFeed {
  image: string;
  description: string;
  link: string;
}

interface rightFeed {
  image: string;
  description: string;
  link: string;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(private navCtrl: NavController) {}

  leftFeed: leftFeed[] = [
    {
      image: '../../assets/FeedImages/article1.jpeg',
      description: 'About Mental Health (Article)',
      link: 'https://www.cdc.gov/mentalhealth/learn/',
    },

    {
      image: '../../assets/FeedImages/ocd.jpg',
      description: 'Obsessive-Compulsive Disorder (Article)',
      link: 'https://www.nimh.nih.gov/health/topics/obsessive-compulsive-disorder-ocd',
    },

    {
      image: '../../assets/FeedImages/story.jpeg',
      description: 'Opening Up About My Struggle (Real Story)',
      link: 'https://www.healthaffairs.org/doi/10.1377/hlthaff.2021.00894',
    },

    {
      image: '../../assets/FeedImages/catastrophizing.jpg',
      description: 'How to Stop Making Yourself Depressed and Anxious (Video)',
      link: 'https://youtu.be/b4pP6HyXRMI',
    },

    {
      image: '../../assets/FeedImages/improveMentalHealth.jpg',
      description: 'Improve Your Mental Wellbeing (Article)',
      link: 'https://www.mind.org.uk/information-support/tips-for-everyday-living/wellbeing/wellbeing/',
    },
  ];

  rightFeed: rightFeed[] = [
    {
      image: '../../assets/FeedImages/sleepHygieneVideo.jpeg',
      description: ' Train Your Brain to Fall Asleep and Sleep Better (Video)',
      link: 'https://youtu.be/fk-_SwHhLLc',
    },

    {
      image: '../../assets/FeedImages/anxietyArticle.jpeg',
      description: 'How To Deal With Anxiety (Article)',
      link: 'https://www.mayoclinichealthsystem.org/hometown-health/speaking-of-health/11-tips-for-coping-with-an-anxiety-disorder',
    },

    {
      image: '../../assets/FeedImages/overThink.jpg',
      description: 'Intrusive Thoughts and Overthinking ',
      link: 'https://youtu.be/V3vhXQy48jo',
    },

    {
      image: '../../assets/FeedImages/worryFuture.jpg',
      description: 'How to Stop Worrying About the Future (Video)',
      link: 'https://youtu.be/u79XABa_mHk',
    },

    {
      image: '../../assets/FeedImages/ptsdArticle.jpeg',
      description: 'What is Posttraumatic Stress Disorder (PTSD)? (Article)',
      link: 'https://www.psychiatry.org/patients-families/ptsd/what-is-ptsd',
    },

    {
      image: '../../assets/FeedImages/adhdStory.jpg',
      description: 'This is MY ADHD Story; Literally (Real Story)',
      link: 'https://adhd-women.eu/blog/this-is-my-adhd-story-literally/',
    },
  ];


  settingAction(){
    this.navCtrl.navigateForward('/settings');
  }

}
