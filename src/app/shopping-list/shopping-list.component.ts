import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from '../../../node_modules/rxjs/Subscription';

import { Ingredient } from '../shared/ingredient.model'
import { ShoppingListService } from './shopping-list.service';
import { RecipeService } from '../recipes/recipe.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscription: Subscription;

  constructor(private shoppingListService: ShoppingListService, private recipeService: RecipeService) {}

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.ingredients.splice;
    this.subscription =  this.shoppingListService.ingredientAdd.subscribe(
      (ingredients: Ingredient[]) =>
      this.ingredients = ingredients
    );
  }

  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
