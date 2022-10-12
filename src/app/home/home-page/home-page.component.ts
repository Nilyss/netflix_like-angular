import { Component, OnInit } from '@angular/core'
import { Videos } from '../../api/videos'
import { VideosService } from '../../api/VideosHttpRequest'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(private VideosService: VideosService) {}

  videosList: Videos[]

  ngOnInit(): void {
    this.VideosService.getVideosList().subscribe(
      (videosList) => (this.videosList = videosList)
    )
  }
}
