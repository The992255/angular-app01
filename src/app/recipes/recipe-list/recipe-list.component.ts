import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../recope.model';
import { RecipeService } from '../recipe.service';
import { Subscription } from '../../../../node_modules/rxjs/Subscription';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  private subscription: Subscription;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();

    this.subscription = this.recipeService.recipeF5.subscribe(
      (Recipe) => {
        this.recipes = Recipe;
      }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
