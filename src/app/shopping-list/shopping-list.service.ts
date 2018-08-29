import { Ingredient } from '../shared/ingredient.model'
import { Subject } from '../../../node_modules/rxjs/Subject';

export class ShoppingListService {
    ingredientAdd = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('打死粗奶丸', 5),
        new Ingredient('插人放我!', 1)
    ];

    addIngredients(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientAdd.next(this.ingredients.slice());
    }

    updataIngredients(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientAdd.next(this.ingredients.slice());
    }

    deleteIngredients(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientAdd.next(this.ingredients.slice());
    }

    addmanyIngredients(ingredients: Ingredient[]) {      
        this.ingredients.push(...ingredients);
        //將一個物件陣列轉變為多個物件
        this.ingredientAdd.next(this.ingredients.slice());
    }

    getIngredients() {
        return this.ingredients.slice();
    }

    getIngredient(index: number) {
        return this.ingredients[index];
    }
}