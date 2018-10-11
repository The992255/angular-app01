import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';

// import { Recipe } from '../recope.model';
import { RecipeService } from '../recipe.service';
import { Subscription } from '../../../../node_modules/rxjs/Subscription';
import { Store } from '@ngrx/store';
import * as fromRecipe from '../store/recipe.reducers';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipesState: Observable<fromRecipe.State>;
  private subscription: Subscription;

  constructor(private recipeService: RecipeService, private store: Store<fromRecipe.FeatuerState>) { }

  ngOnInit() {
    this.recipesState = this.store.select('recipes');
    // this.recipes = this.recipeService.getRecipes();
    // this.subscription = this.recipeService.recipeF5.subscribe(
    //   (recipe: Recipe[]) => {
    //     this.recipes = recipe;
    //   }
    // );
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
}
