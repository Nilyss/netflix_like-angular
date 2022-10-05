import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterOutlet } from '@angular/router'

// modules
import { AppRoutingModule } from '../app-routing.module'

// components
import { AuthPageComponent } from './auth-page/auth-page.component'

// libraries

@NgModule({
  declarations: [AuthPageComponent],
  imports: [CommonModule, AppRoutingModule, RouterOutlet],
})
export class AuthModule {}
