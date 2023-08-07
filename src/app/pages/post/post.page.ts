import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, setDoc, updateDoc, arrayUnion, getDoc, DocumentSnapshot } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAhwUQ4dyWspAU53ErwArgyXhl-ZzZNw2I",
  authDomain: "healthify-78015.firebaseapp.com",
  projectId: "healthify-78015",
  storageBucket: "healthify-78015.appspot.com",
  messagingSenderId: "307872925519",
  appId: "1:307872925519:web:74d67cc5cbf3091704a73a",
  measurementId: "G-09F20RSR0T"
};

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {
  textareaContent: string = '';
  maxWordLimit: number = 100;
  private db: any;
  private userId!: string;
  private username?: string;
  community: any[] = [];

  constructor(private navCtrl: NavController) {
    const app = initializeApp(firebaseConfig);
    this.db = getFirestore(app);
    const auth = getAuth(app);

    onAuthStateChanged(auth, async (user) => {
      if (user) {
        this.userId = user.uid;
        const userDoc: DocumentSnapshot<any> = await getDoc(doc(this.db, 'users', this.userId));
        this.username = userDoc.data()?.username || '';
        this.fetchCommunityPosts();
      }
    });
  }

  ngOnInit() {}

  async fetchCommunityPosts() {
    try {
      const communityPostsDoc: DocumentSnapshot<any> = await getDoc(doc(this.db, 'community', 'posts'));
      this.community = (communityPostsDoc.data()?.posts || []).sort((a: { timestamp: number }, b: { timestamp: number }) => b.timestamp - a.timestamp);
    } catch (error) {
      console.error('Error fetching community posts:', error);
    }
  }
  
  checkWordLimit() {
    const words = this.textareaContent.trim().split(/\s+/);
    if (words.length > this.maxWordLimit) {
      this.textareaContent = words.slice(0, this.maxWordLimit).join(' ');
    }
  }

  async postSendAction() {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // January is 0
    const year = String(date.getFullYear()).slice(-2);
    // const formattedDate = `${day}/${month}/${year}`;
    const timestamp = new Date();
    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate().toString().padStart(2, '0')}/${(currentDate.getMonth() + 1).toString().padStart(2, '0')}/${currentDate.getFullYear().toString().substr(-2)}`;

    try {
      const commonData = {
        content: this.textareaContent,
        image: '', // Placeholder for the image
        time: formattedDate,
        timestamp: currentDate.getTime(), // Add timestamp
        writer: this.username,
        isLiked: false, // Initialize isLiked property
      };
  
      // Save to user's posts
      const userPostsCollectionRef = doc(this.db, 'users', this.userId);
      await updateDoc(userPostsCollectionRef, {
        posts: arrayUnion(commonData),
      });
  
      // Save to community posts
      const communityPostsCollectionRef = doc(this.db, 'community', 'posts');
      await updateDoc(communityPostsCollectionRef, {
        posts: arrayUnion(commonData),
      });
  
      this.fetchCommunityPosts(); // Refresh community posts
  
      this.navCtrl.navigateForward('/tabs/tab3');
    } catch (error) {
      console.error('Error posting data:', error);
    }
  }

  // async likeCard(card) {
  //   // Code to handle liking a card
  //   // Update both the user's post and the community post accordingly
  // }
}
