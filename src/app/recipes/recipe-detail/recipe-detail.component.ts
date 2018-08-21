import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { Recipe } from '../recope.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input('recipeToGet') recipe: Recipe;
  @Input('recipeID') recipeID: number;

  constructor(private shoppingListService: ShoppingListService, private recipeService: RecipeService) { }

  ngOnInit() {}

  toShoppingList(ingredients: Ingredient[]) {
    this.recipeService.addIngredientToShoppingList(ingredients);
  }

  delRecipe() {
    this.recipeService.delRecipe(this.recipeID);    
  }
}
