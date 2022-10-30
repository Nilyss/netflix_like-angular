import { Component } from '@angular/core'
import { VideosMockup } from '../../api/VideosMockup'
import { Router } from '@angular/router'
import { VideosServiceMockup } from '../../api/videos.service'

// import Swiper core and required components
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller,
  A11y,
} from 'swiper'

import { BehaviorSubject } from 'rxjs'
import Swiper from 'swiper/types/swiper-class'

// install swiper components
SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller,
  A11y,
])

@Component({
  selector: 'app-home-popular-carousel',
  templateUrl: './home-popular-carousel.component.html',
  styleUrls: ['./home-popular-carousel.component.scss'],
})
export class HomePopularCarouselComponent {
  image1: string = '../../../assets/carousel/1.jpg'
  image2: string = '../../../assets/carousel/2.jpg'
  image3: string = '../../../assets/carousel/3.jpg'
  image4: string = '../../../assets/carousel/4.jpg'
  image5: string = '../../../assets/carousel/5.jpg'
  image6: string = '../../../assets/carousel/6.jpg'
  image7: string = '../../../assets/carousel/7.jpg'

  videoList: VideosMockup[]

  constructor(
    private router: Router,
    private videoService: VideosServiceMockup
  ) {}

  ngOnInit() {
    this.videoService
      .getVideoList()
      .subscribe((videoList) => (this.videoList = videoList))
  }

  gotToVideo(video: VideosMockup) {
    this.router.navigate(['/shows', video.id])
  }
}
