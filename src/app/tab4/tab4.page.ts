import { Component, OnInit } from '@angular/core';
import{NavController} from '@ionic/angular';

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

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  postCards: postCard[] = [
    {
      writer: 'John Doe',
      image: '../../assets/UserPhotos/userPhoto.jpg',
      time: '2h ago',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ultricies aliquam, nisl nisl aliquet nisl, eu aliquet nisl nisl nec nisl. Donec euismod, nisl eget ultricies aliquam, nisl nisl aliquet nisl, eu aliquet nisl nisl nec nisl.',
    },

    {
      writer: 'John Doe',
      image: '../../assets/UserPhotos/userPhoto.jpg',
      time: '2h ago',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ultricies aliquam',
    },

    {
      writer: 'John Doe',
      image: '../../assets/UserPhotos/userPhoto.jpg',
      time: '2h ago',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ultricies aliquam, nisl nisl aliquet nisl, eu aliquet nisl nisl nec nisl. Donec euismod, nisl eget ultricies aliquam, nisl nisl aliquet nisl, eu aliquet nisl nisl nec nisl.',
    },
  ];

  settingsAction(){
    this.navCtrl.navigateForward('/settings');
  }
}
