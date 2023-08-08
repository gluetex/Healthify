import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, updateDoc, arrayUnion, getDoc, DocumentSnapshot } from 'firebase/firestore';

interface postCard {
  avatar?: string;
  writer: string;
  time: string;
  content: string;
  isLiked: boolean;
}

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
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
      measurementId: "G-09F20RSR0T"    };

    const app = initializeApp(firebaseConfig);
    this.db = getFirestore(app);

    this.fetchData();

  }


  ngOnInit() {
    this.fetchData();
  }

  likeCard(card: postCard) {
    card.isLiked = !card.isLiked;
  }

  async fetchData() {

    // try {
    //   const communityPostsDoc: DocumentSnapshot<any> = await getDoc(doc(this.db, 'community', 'posts'));
    //   const postsArray = communityPostsDoc.data()?.posts || [];
    //   this.community = postsArray.sort((a: any, b: any) => b.timestamp - a.timestamp);
    // } catch (error) {
    //   console.error('Error fetching community posts:', error);
    // }

    try {
      const communityPostsDoc: DocumentSnapshot<any> = await getDoc(doc(this.db, 'community', 'posts'));
      const postsArray = communityPostsDoc.data()?.posts || [];
      
      // Fetch avatars for each post
      const avatarPromises = postsArray.map(async (post: { writer: any; }) => {
        try {
          const writer = post.writer; // Assume each post has a writer that corresponds to a user in the 'users' collection
          const userSnapshot = await getDoc(doc(this.db, 'users', writer));
          const avatarUrl = userSnapshot.data()?.['avatar'] || 'https://firebasestorage.googleapis.com/v0/b/healthify-78015.appspot.com/o/UserPhotos%2Fjelly.png?alt=media&token=ad72f422-616d-44c6-a5e7-19ebcb5a6ff8'; // Use default avatar if none found
          return { ...post, avatar: avatarUrl };
        } catch (err) {
          console.error('Error fetching avatar for post:', err);
          return post; // Return post without avatar if there's an error
        }
      });
      
      this.community = await Promise.all(avatarPromises);
      this.community.sort((a: any, b: any) => b.timestamp - a.timestamp);
  
    } catch (error) {
      console.error('Error fetching community posts:', error);
    }


  }
  postAction() {
    this.navCtrl.navigateForward('/post');
  }
  
}
