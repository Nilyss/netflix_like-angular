import { Component } from '@angular/core'

@Component({
  selector: 'app-second-card',
  templateUrl: './second-card.component.html',
  styleUrls: ['./second-card.component.scss'],
})
export class SecondCardComponent {
  TvImage: string = '../../../assets/images/auth-page/tv.png'
  TvVideo: string = '../../../assets/videos/auth-page/video-tv-0819.mp4'
}
