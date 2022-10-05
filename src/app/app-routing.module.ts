import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { HomePageComponent } from './home/home-page/home-page.component'
import { AuthPageComponent } from './auth/auth-page/auth-page.component'

const routes: Routes = [
  { path: 'authentication', component: AuthPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: '', redirectTo: 'authentication', pathMatch: 'full' },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
