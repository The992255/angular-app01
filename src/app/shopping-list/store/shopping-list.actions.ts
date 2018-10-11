import { Action } from '@ngrx/store';
import { Ingredient } from '../../shared/ingredient.model';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const ADD_INGREDIENTS = 'ADD_INGREDIENTS';
export const UPDATA_INGREDIENT = 'UPDATA_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export const START_EDIT = 'START_EDIT';
export const STOP_EDIT = 'STOP_EDIT';

export class AddIngredient implements Action {
    readonly type = ADD_INGREDIENT;
    // payload: Ingredient;
    constructor(public payload: Ingredient) { }
}

export class AddIngredients implements Action {
    readonly type = ADD_INGREDIENTS;
    // payload: Ingredient;
    constructor(public payload: Ingredient[]) { }
}

export class UpdataIngredient implements Action {
    readonly type = UPDATA_INGREDIENT;
    // payload: Ingredient;
    constructor(public payload: Ingredient) { }
}

export class StartEdit implements Action {
    readonly type = START_EDIT;
    // payload: Ingredient;
    constructor(public payload: number) { }
}

export class StopEdit implements Action {
    readonly type = STOP_EDIT;
    // payload: Ingredient;
}

export class DeleteIngredient implements Action {
    readonly type = DELETE_INGREDIENT;
    // payload: Ingredient;
}
export type ShoppingListActions = AddIngredient | AddIngredients | UpdataIngredient | DeleteIngredient | StartEdit | StopEdit;
