import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';
import { Recipe } from './recope.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  recipeToUp: Recipe;
  recipeID: number;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipe: {Recipe: Recipe, recipeID: number}) => {
        this.recipeID = recipe.recipeID;
        this.recipeToUp = recipe.Recipe;
      }
    );
    this.recipeService.recipeF5.subscribe(
      (Recipe) => {
        this.recipeToUp = undefined;
      }
    )
  }
}
