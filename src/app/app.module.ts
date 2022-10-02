import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { SwiperModule } from 'swiper/angular'

import { AppComponent } from './app.component'
import { RouterOutlet } from '@angular/router'
import { AppRoutingModule } from './app-routing.module'
import { HomePageComponent } from '../views/home/home-page/home-page.component'
import { AuthPageComponent } from '../views/auth/auth-page/auth-page.component'
import { HomeNavComponent } from '../views/home/home-nav/home-nav.component'
import { HomePromoComponent } from '../views/home/home-promo/home-promo.component'
import { HomePopularCarouselComponent } from '../views/home/home-popular-carousel/home-popular-carousel.component'

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AuthPageComponent,
    HomeNavComponent,
    HomePromoComponent,
    HomePopularCarouselComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterOutlet, SwiperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
