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
import { VideosService } from './api/VideosHttpRequest'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AuthModule,
    HomeModule,
    AppRoutingModule,
    RouterOutlet,
  ],
  providers: [VideosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
