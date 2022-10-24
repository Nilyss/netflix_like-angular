import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterOutlet } from '@angular/router'

// modules
import { AppRoutingModule } from '../app-routing.module'

// components
import { AuthPageComponent } from './auth-page/auth-page.component'
import { AuthHeaderComponent } from './auth-header/auth-header.component'
import { FirstCardComponent } from './first-card/first-card.component'
import { SecondCardComponent } from './second-card/second-card.component'
import { ThirdCardComponent } from './third-card/third-card.component';
import { FourthCardComponent } from './fourth-card/fourth-card.component';
import { FifthCardComponent } from './fifth-card/fifth-card.component';
import { SixthCardComponent } from './sixth-card/sixth-card.component';
import { AuthFooterComponent } from './auth-footer/auth-footer.component'

// libraries

@NgModule({
  declarations: [
    AuthPageComponent,
    AuthHeaderComponent,
    FirstCardComponent,
    SecondCardComponent,
    ThirdCardComponent,
    FourthCardComponent,
    FifthCardComponent,
    SixthCardComponent,
    AuthFooterComponent,
  ],
  imports: [CommonModule, AppRoutingModule, RouterOutlet],
})
export class AuthModule {}
