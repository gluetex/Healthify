import { Component, OnInit } from '@angular/core';
import{ NavController } from '@ionic/angular';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { query, collection, where, getDocs } from 'firebase/firestore';

interface postCard {
  image: string;
  writer: string;
  time: string;
  content: string;
}

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  public community: postCard[] = [];
  private db: any;

  constructor(private navCtrl: NavController) {
    const firebaseConfig = {
      apiKey: "AIzaSyAhwUQ4dyWspAU53ErwArgyXhl-ZzZNw2I",
      authDomain: "healthify-78015.firebaseapp.com",
      projectId: "healthify-78015",
      storageBucket: "healthify-78015.appspot.com",
      messagingSenderId: "307872925519",
      appId: "1:307872925519:web:74d67cc5cbf3091704a73a",
      measurementId: "G-09F20RSR0T" 
    };

    const app = initializeApp(firebaseConfig);
    this.db = getFirestore(app);

    onAuthStateChanged(getAuth(app), (user) => {
      if (user) {
        const userId = user.uid;
        this.fetchData(userId);
      }
    });
  }

  ngOnInit() {
  }

  async fetchData(userId: string) {
    try {
      const userDocumentRef = doc(this.db, "users", userId);
      const userSnapshot = await getDoc(userDocumentRef);
  
      if (userSnapshot.exists()) {
        this.community = userSnapshot.data()['posts'] as postCard[];
      }
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  }

  settingsAction(){
    this.navCtrl.navigateForward('/settings');
  }

  
}
