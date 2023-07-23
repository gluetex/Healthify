import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

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
  constructor(private navCtrl: NavController) {}

  isLiked: boolean = false;

  likeCard(card: postCard) {
    card.isLiked = !card.isLiked;
  }
  postCards: postCard[] = [
    {
      writer: 'John Doe',
      image: '../../assets/UserPhotos/userPhoto.jpg',
      time: '2h ago',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ultricies aliquam, nisl nisl aliquet nisl, eu aliquet nisl nisl nec nisl. Donec euismod, nisl eget ultricies aliquam, nisl nisl aliquet nisl, eu aliquet nisl nisl nec nisl.',
      isLiked: false,
    },

    {
      writer: 'John Doe',
      image: '../../assets/UserPhotos/userPhoto.jpg',
      time: '2h ago',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ultricies aliquam',
      isLiked: false,
    },

    {
      writer: 'John Doe',
      image: '../../assets/UserPhotos/userPhoto.jpg',
      time: '2h ago',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ultricies aliquam, nisl nisl aliquet nisl, eu aliquet nisl nisl nec nisl. Donec euismod, nisl eget ultricies aliquam, nisl nisl aliquet nisl, eu aliquet nisl nisl nec nisl.',
      isLiked: false,
    },
  ];

  postAction() {
    this.navCtrl.navigateForward('/post');
  }
}
