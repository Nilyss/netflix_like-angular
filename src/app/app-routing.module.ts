import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { HomePageComponent } from './home/home-page/home-page.component'
import { AuthPageComponent } from './auth/auth-page/auth-page.component'
import { ShowPageComponent } from './show/show-page/show-page.component'

const routes: Routes = [
  { path: 'authentication', component: AuthPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: `shows/:id`, component: ShowPageComponent },
  { path: '', redirectTo: 'authentication', pathMatch: 'full' },
  // {path: '**', component: 'NotExistPageComponent'}, // Component didn't exist for now
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
