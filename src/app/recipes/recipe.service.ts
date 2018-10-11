import { Injectable } from '@angular/core';
import { Recipe } from './recope.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from '../../../node_modules/rxjs/Subject';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../shopping-list/store/shopping-list.actions';

@Injectable()
export class RecipeService {
    recipeF5 = new Subject<Recipe[]>();

    constructor(private shoppingListService: ShoppingListService, private store: Store<{ shoppingList: { ingredients: Ingredient[] } }>) { }

    private recipes: Recipe[] = [
        new Recipe('粗奶丸', '丸!!!!',
            'http://img.komicolle.org/2016-01/14532837189673.jpg',
            [
                new Ingredient('讚領綜合', 1),
                new Ingredient('異己烷', 1)
            ]),
        new Recipe('打架異己烷', '異己......烷!!!!!',
            'https://archive-media-1.nyafuu.org/bant/image/1514/13/1514130091969.png',
            [
                new Ingredient('洗苦課錢', 3),
                new Ingredient('80靈夢', 1)
            ])
    ];

    saveRecipes(newRecipes: Recipe[]) {
        this.recipes = newRecipes;
        if (newRecipes === null) {
            this.recipeF5.next();
        } else {
            this.recipeF5.next(this.recipes.slice());
        }

    }

    // addIngredientToShoppingList(ingredients: Ingredient[]) {
    //     // for (const key in ingredients) {
    //     //     this.shoppingListService.addIngredients(ingredients[key])
    //     // }
    //     // this.shoppingListService.addmanyIngredients(ingredients);
    //     this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients));
    // }

    delRecipe(id: number) {
        this.recipes.splice(id, 1);
        this.recipeF5.next(this.recipes.slice());
    }

    getRecipes() {
        if (this.recipes !== null) { return this.recipes.slice(); }
    }

    getRecipeById(id: number) {
        // return this.recipes.slice(id ,id+1)[0];
        return this.recipes.slice()[id];
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipeF5.next(this.recipes.slice());
    }

    updataRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipeF5.next(this.recipes.slice());
    }
}
