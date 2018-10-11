import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { Recipe } from '../recope.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '../../../../node_modules/@angular/router';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions';
// import * as formApp from '../../store/app.reducers';
import * as fromRecipe from '../store/recipe.reducers';
import * as RecipeAction from '../store/recipe.actions';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  recipe: Observable<fromRecipe.State>;
  recipeID: number;

  constructor(private shoppingListService: ShoppingListService, private recipeService: RecipeService,
    private route: ActivatedRoute, private router: Router,
    private store: Store<fromRecipe.FeatuerState>) { }

  ngOnInit() {
    // this.recipeID = this.route.params['id'];
    // this.recipe = this.recipeService.getRecipeById(this.recipeID);
    // this.recipeService.recipeF5.subscribe(
    //   () => {
    //     this.recipe = this.recipeService.getRecipeById(this.recipeID);
    //   }
    // );

    this.route.params.subscribe((params: Params) => {
      this.recipeID = +params['id'];
      // this.recipe = this.recipeService.getRecipeById(this.recipeID);
      this.recipe = this.store.select('recipes');
    });
  }

  toShoppingList() {
    // this.recipeService.addIngredientToShoppingList(ingredients);
    this.store.select('recipes').take(1).subscribe((recipe: fromRecipe.State) => {
      this.store.dispatch(new ShoppingListActions.AddIngredients(recipe.recipes[this.recipeID].ingredients));
      // this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients));
    });
    this.router.navigate(['/shopping-list']);
  }

  editRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  delRecipe() {
    // this.recipeService.delRecipe(this.recipeID);
    this.store.dispatch(new RecipeAction.DeleteRecipe(this.recipeID));
    this.router.navigate(['/recipes']);
  }

  ngOnDestroy() { }
}
