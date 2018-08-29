import { Ingredient } from '../shared/ingredient.model'
import { Subject } from '../../../node_modules/rxjs/Subject';

export class ShoppingListService {
    ingredientAdd = new Subject<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('打死粗奶丸', 5),
        new Ingredient('插人放我!', 1)
    ];

    addIngredients(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientAdd.next(this.ingredients.slice());
    }

    addmanyIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientAdd.next(this.ingredients.slice());
    }

    getIngredients() {
        return this.ingredients.slice();
    }
}