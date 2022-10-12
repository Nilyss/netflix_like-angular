import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-home-nav',
  templateUrl: './home-nav.component.html',
  styleUrls: ['./home-nav.component.scss'],
})
export class HomeNavComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  logo: string = '../../../assets/logos/Logonetflix.png'
  avatar: string = '../../../assets/logos/Netflix-avatar.png'
}
