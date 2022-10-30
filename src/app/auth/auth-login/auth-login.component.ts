import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss'],
})
export class AuthLoginComponent {
  constructor(private router: Router) {}

  logo: string = '../../../assets/logos/Logonetflix.png'
  background: string = '../../../assets/images/auth-page/authBackground.jpg'

  goToHome() {
    this.router.navigate(['/authentication'])
  }
}
