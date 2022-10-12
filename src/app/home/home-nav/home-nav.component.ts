import { Component, OnInit } from '@angular/core'

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

  constructor() {}

  ngOnInit(): void {}

  logo: string = '../../../assets/logos/Logonetflix.png'
  avatar: string = '../../../assets/logos/Netflix-avatar.png'
}
