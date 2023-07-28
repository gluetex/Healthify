import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

interface Feed {
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
  public leftFeed: Feed[] = [];
  public rightFeed: Feed[] = [];
  private db: any;

  constructor(private navCtrl: NavController) {
    const firebaseConfig = {
      apiKey: "AIzaSyAhwUQ4dyWspAU53ErwArgyXhl-ZzZNw2I",
      authDomain: "healthify-78015.firebaseapp.com",
      projectId: "healthify-78015",
      storageBucket: "healthify-78015.appspot.com",
      messagingSenderId: "307872925519",
      appId: "1:307872925519:web:74d67cc5cbf3091704a73a",
      measurementId: "G-09F20RSR0T"    };

    const app = initializeApp(firebaseConfig);
    this.db = getFirestore(app);

    this.fetchData();
  }
  ngOnInit() {
    this.fetchData();
  }
  

  async fetchData() {
    try {
      const leftFeedSnapshot = await getDoc(doc(this.db, 'newsFeed', 'leftFeed'));
      const rightFeedSnapshot = await getDoc(doc(this.db, 'newsFeed', 'rightFeed'));
  
      if (leftFeedSnapshot.exists()) {
        this.leftFeed = leftFeedSnapshot.data()['feed'] as Feed[];
      }
  
      if (rightFeedSnapshot.exists()) {
        this.rightFeed = rightFeedSnapshot.data()['feed'] as Feed[];
      }
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  }

}
