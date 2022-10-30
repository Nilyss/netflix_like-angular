import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent implements OnInit {
  email: string = ''
  password: string = ''
  errorMail: string = ''
  errorPassword: string = ''

  constructor(private router: Router) {}

  ngOnInit(): void {}

  login() {
    {
      this.errorMail = ''
      this.errorPassword = ''
      if (this.email === '') {
        console.log('error mail proc')
        this.errorMail = 'Please enter a valid email or phone number.'
        return
      }
      if (this.password === '') {
        console.log('error password proc')
        this.errorPassword =
          'Your password must contain between 4 and 60 characters.'
        return
      }
      if (this.email === 'admin@admin.com' && this.password === 'adminlol') {
        this.router.navigate(['/home'])
      } else {
        this.password = ''
        this.errorPassword = 'Invalid account information'
      }
    }
  }
}
