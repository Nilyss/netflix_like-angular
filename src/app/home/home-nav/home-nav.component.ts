import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-home-nav',
  templateUrl: './home-nav.component.html',
  styleUrls: ['./home-nav.component.scss'],
})
export class HomeNavComponent implements OnInit {
  // Toggle for the search bar input and style on toggle
  isShowSearchBar = false
  toggleDisplaySearchBar() {
    this.isShowSearchBar = !this.isShowSearchBar
  }

  // search input

  constructor(private router: Router) {}

  ngOnInit(): void {}

  logo: string = '../../../assets/logos/Logonetflix.png'
  avatar: string = '../../../assets/logos/Netflix-avatar.png'

  goToAuth() {
    this.router.navigate(['/authentication'])
  }
}
