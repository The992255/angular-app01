import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShoppingEditComponent implements OnInit {
  @Output() play = new EventEmitter<{name: string, amount: number}>();
  constructor() { }

  ngOnInit() {
  }

  addPlay (nameInput: HTMLInputElement, amountInput: HTMLInputElement) {
    this.play.emit({
      name: nameInput.value,
      amount: amountInput.valueAsNumber
    })
  }

}
