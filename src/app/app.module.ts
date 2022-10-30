import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { RouterOutlet } from '@angular/router'

// modules
import { AuthModule } from './auth/auth.module'
import { HomeModule } from './home/home.module'
import { AppRoutingModule } from './app-routing.module'

// http request
import { HttpClientModule } from '@angular/common/http'
// import { VideosService } from './api/VideosHttpRequest'

// mockup
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
import { InMemoryDataService } from './in-memory-data-service'
import { VideosServiceMockup } from './api/videos.service'
import { ShowPageComponent } from './show/show-page/show-page.component'
import { ShowHeaderComponent } from './show/show-header/show-header.component'

@NgModule({
  declarations: [AppComponent, ShowPageComponent, ShowHeaderComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
    AuthModule,
    HomeModule,
    AppRoutingModule,
    RouterOutlet,
  ],
  providers: [VideosServiceMockup],
  bootstrap: [AppComponent],
})
export class AppModule {}
