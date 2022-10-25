import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-sixth-card',
  templateUrl: './sixth-card.component.html',
  styleUrls: ['./sixth-card.component.scss'],
})
export class SixthCardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  isHidden = [false, false, false, false, false, false]

  toggleQuestion(index: number) {
    this.isHidden[index] = !this.isHidden[index]
    if (this.isHidden) {
      this.isHidden.filter((e, eIndex) => {
        if (eIndex !== index) {
          this.isHidden[eIndex] = false
        }
      })
    }
  }
}
