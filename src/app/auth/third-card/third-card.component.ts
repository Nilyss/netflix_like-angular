import { Component } from '@angular/core'

@Component({
  selector: 'app-third-card',
  templateUrl: './third-card.component.html',
  styleUrls: ['./third-card.component.scss'],
})
export class ThirdCardComponent {
  smartphoneImage: string = '../../../assets/images/auth-page/mobile-0819.jpg'
  showPoster: string = '../../../assets/images/auth-page/boxshot.png'
}
