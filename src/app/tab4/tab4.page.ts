// import { Component, OnInit } from '@angular/core';
// import{ NavController } from '@ionic/angular';
// import { initializeApp } from 'firebase/app';
// import { getFirestore, doc, setDoc, updateDoc, arrayUnion, getDoc, DocumentSnapshot } from 'firebase/firestore';
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { query, collection, where, getDocs } from 'firebase/firestore';

// interface postCard {
//   image: string;
//   writer: string;
//   time: string;
//   content: string;
//   avatar: string;
// }

// @Component({
//   selector: 'app-tab4',
//   templateUrl: './tab4.page.html',
//   styleUrls: ['./tab4.page.scss'],
// })
// export class Tab4Page implements OnInit {
//   public community: postCard[] = [];
//   private db: any;
//   public userProfile: any = {};

//   constructor(private navCtrl: NavController) {
//     const firebaseConfig = {
//       apiKey: "AIzaSyAhwUQ4dyWspAU53ErwArgyXhl-ZzZNw2I",
//       authDomain: "healthify-78015.firebaseapp.com",
//       projectId: "healthify-78015",
//       storageBucket: "healthify-78015.appspot.com",
//       messagingSenderId: "307872925519",
//       appId: "1:307872925519:web:74d67cc5cbf3091704a73a",
//       measurementId: "G-09F20RSR0T" 
//     };

//     const app = initializeApp(firebaseConfig);
//     this.db = getFirestore(app);

//     onAuthStateChanged(getAuth(app), (user) => {
//       if (user) {
//         const userId = user.uid;
//         this.fetchData(userId);
//       }
//     });
//   }

//   ngOnInit() {
//   }
//   async fetchData(userId: string) {
//     try {
//       const userDocumentRef = doc(this.db, "users", userId);
//       const userSnapshot = await getDoc(userDocumentRef);
  
//       if (userSnapshot.exists()) {
//         const userAvatar = userSnapshot.data()?.['avatar'] || ''; 
//         const postsArray = userSnapshot.data()['posts'] as postCard[];
  
//         this.community = postsArray.map(post => ({
//           ...post,
//           avatar: userAvatar
//         })).sort((a, b) => {
//           let dateA = new Date(a.time);
//           let dateB = new Date(b.time);
  
//           if (isNaN(dateA.getTime())) {
//             dateA = new Date(a.time.split('/').reverse().join('/'));
//           }
  
//           if (isNaN(dateB.getTime())) {
//             dateB = new Date(b.time.split('/').reverse().join('/'));
//           }
  
//           return dateB.getTime() - dateA.getTime();
//         });
//       }
//     } catch (error) {
//       console.error('Error fetching data: ', error);
//     }
//   }
  

//   settingsAction(){
//     this.navCtrl.navigateForward('/settings');
//   }

  
// }

import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from "firebase/auth";

interface postCard {
  image: string;
  writer: string;
  time: string;
  content: string;
  avatar: string;
}

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  public community: postCard[] = [];
  public userProfile: any = {};
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
        const userData = userSnapshot.data();
        this.userProfile.avatar = userData?.['avatar'] || '';
        this.userProfile.username = userData?.['username'] || '';
        this.userProfile.location = userData?.['location'] || '';

        const postsArray = userData['posts'] as postCard[];
        this.community = postsArray.map(post => ({
          ...post,
          avatar: this.userProfile.avatar
        })).sort((a, b) => {
          let dateA = new Date(a.time);
          let dateB = new Date(b.time);
          return dateB.getTime() - dateA.getTime();
        });
      }
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  }

  settingsAction() {
    this.navCtrl.navigateForward('/settings');
  }
}
