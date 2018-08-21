import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../../recipe.service';
import { Recipe } from '../../recope.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input('recipe') recipe: Recipe;
  @Input('recipeID') recipeID: number;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() { }

  onSelected() {
    
  }
}