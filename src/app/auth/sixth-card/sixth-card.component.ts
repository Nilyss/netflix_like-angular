import { Component, OnInit } from '@angular/core'
import { Question } from '../question'
import { QUESTIONS } from '../mock-question'

@Component({
  selector: 'app-sixth-card',
  templateUrl: './sixth-card.component.html',
  styleUrls: ['./sixth-card.component.scss'],
})
export class SixthCardComponent implements OnInit {
  Questions: Question[] = QUESTIONS

  constructor() {}

  ngOnInit(): void {}

  isDisplay = [true]

  setDisplay(id: number) {
    this.Questions.forEach((el) => {
      if (el.id === id) {
        this.isDisplay[id] = !this.isDisplay[id]
      }
      if (el.id !== id) {
        this.isDisplay[el.id] = false
      }
    })
  }
}
