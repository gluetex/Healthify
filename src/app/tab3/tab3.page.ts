import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

interface postCard {
  image: string;
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
    try {
      const communitySnapshot = await getDoc(doc(this.db, 'community', 'posts'));
      if (communitySnapshot.exists()) {
        this.community = communitySnapshot.data()['posts'] as postCard[]; // Use 'posts' instead of 'community'
      }
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  }
  // isLiked: boolean = false;


  // postCards: postCard[] = [
  //   {
  //     writer: 'John Doe',
  //     image: '../../assets/UserPhotos/userPhoto.jpg',
  //     time: '2h ago',
  //     content:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ultricies aliquam, nisl nisl aliquet nisl, eu aliquet nisl nisl nec nisl. Donec euismod, nisl eget ultricies aliquam, nisl nisl aliquet nisl, eu aliquet nisl nisl nec nisl.',
  //     isLiked: false,
  //   },

  //   {
  //     writer: 'John Doe',
  //     image: '../../assets/UserPhotos/userPhoto.jpg',
  //     time: '2h ago',
  //     content:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ultricies aliquam',
  //     isLiked: false,
  //   },

  //   {
  //     writer: 'John Doe',
  //     image: '../../assets/UserPhotos/userPhoto.jpg',
  //     time: '2h ago',
  //     content:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ultricies aliquam, nisl nisl aliquet nisl, eu aliquet nisl nisl nec nisl. Donec euismod, nisl eget ultricies aliquam, nisl nisl aliquet nisl, eu aliquet nisl nisl nec nisl.',
  //     isLiked: false,
  //   },
  // ];

  postAction() {
    this.navCtrl.navigateForward('/post');
  }
}
