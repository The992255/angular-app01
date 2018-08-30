import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { Recipe } from '../recope.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  recipe: Recipe;
  recipeID: number;

  constructor(private shoppingListService: ShoppingListService, private recipeService: RecipeService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // this.recipeID = this.route.params['id'];
    // this.recipe = this.recipeService.getRecipeById(this.recipeID);

    this.route.params.subscribe(
      (params: Params) => {
        this.recipeID = +params['id'];
        this.recipe = this.recipeService.getRecipeById(this.recipeID);
      }
    );
  }

  toShoppingList(ingredients: Ingredient[]) {
    this.recipeService.addIngredientToShoppingList(ingredients);
    this.router.navigate(['/shopping-list'])
  }

  editRecipe() {
    this.router.navigate(['edit'],  { relativeTo: this.route })
  }

  delRecipe() {
    this.recipeService.delRecipe(this.recipeID);
    this.router.navigate(['/recipes'])
  }

  ngOnDestroy() { }
}
