import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { HomePageComponent } from '../views/home/home-page/home-page.component'

// import { AuthenticationComponent } from './authentication/authentication.component';

const routes: Routes = [
  // { path: 'authentication' },
  { path: 'home', component: HomePageComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
