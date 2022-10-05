import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-home-promo',
  templateUrl: './home-promo.component.html',
  styleUrls: ['./home-promo.component.scss'],
})
export class HomePromoComponent implements OnInit {
  title: string = 'series'
  newLogo: string = '../../../assets/logos/new.png'
  promoLogo: string = '../../../assets/logos/b99Logo.png'
  topLogo: string = '../../../assets/logos/top10.png'

  constructor() {}

  ngOnInit(): void {}
}
