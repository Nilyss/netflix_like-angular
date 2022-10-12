import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { VideosMockup } from '../../api/VideosMockup'
import { VideosServiceMockup } from '../../api/videos.service'

@Component({
  selector: 'app-show-header',
  templateUrl: './show-header.component.html',
  styleUrls: ['./show-header.component.scss'],
})
export class ShowHeaderComponent implements OnInit {
  video: VideosMockup | undefined

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private videoService: VideosServiceMockup
  ) {}

  ngOnInit() {
    const videoId: string | null = this.route.snapshot.paramMap.get('id')
    if (videoId) {
      this.videoService
        .getVideoById(+videoId)
        .subscribe((video) => (this.video = video))
    }
  }
}
