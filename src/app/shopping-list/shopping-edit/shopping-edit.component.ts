import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { Ingredient } from '../../shared/ingredient.model'

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  addPlay (nameInput: HTMLInputElement, amountInput: HTMLInputElement) {
    const ingredient = new Ingredient(nameInput.value, amountInput.valueAsNumber);
    this.shoppingListService.addIngredients(ingredient);  
  }
}
