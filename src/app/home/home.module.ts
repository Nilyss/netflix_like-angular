import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterOutlet } from '@angular/router'

// modules
import { AppRoutingModule } from '../app-routing.module'

// components
import { HomePageComponent } from './home-page/home-page.component'
import { HomeNavComponent } from './home-nav/home-nav.component'
import { HomePromoComponent } from './home-promo/home-promo.component'
import { HomePopularCarouselComponent } from './home-popular-carousel/home-popular-carousel.component'

// libraries
import { SwiperModule } from 'swiper/angular'

@NgModule({
  declarations: [
    HomePageComponent,
    HomeNavComponent,
    HomePromoComponent,
    HomePopularCarouselComponent,
  ],
  imports: [CommonModule, SwiperModule, AppRoutingModule, RouterOutlet],
})
export class HomeModule {}
