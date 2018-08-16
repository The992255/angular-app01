import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('打死粗奶丸', 5),
    new Ingredient('插人放我!', 1)
  ];

  constructor() { }

  ngOnInit() {
    this.ingredients.splice;
    console.log(this.ingredients)
  }

  getPlay(play: {name: string, amount: number}) {
    this.ingredients.push(play)
  }
}
