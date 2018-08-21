import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'

export class ShoppingListService {
    ingredientAdd = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('打死粗奶丸', 5),
        new Ingredient('插人放我!', 1)
    ];

    addIngredients(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientAdd.emit(this.ingredients.slice());
    }

    addmanyIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientAdd.emit(this.ingredients.slice());
    }

    getIngredients() {
        return this.ingredients.slice();
    }
}