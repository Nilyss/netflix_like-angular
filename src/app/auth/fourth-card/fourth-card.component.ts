import { Component } from '@angular/core'

@Component({
  selector: 'app-fourth-card',
  templateUrl: './fourth-card.component.html',
  styleUrls: ['./fourth-card.component.scss'],
})
export class FourthCardComponent {
  deviceImage: string = '../../../assets/images/auth-page/device-pile.png'
  deviceVideo: string = '../../../assets/videos/auth-page/video-devices.mp4'
}
