import * as ShoppingListActions from './shopping-list.actions';

import { Ingredient } from '../../shared/ingredient.model';

// export interface AppState {
//     shoppingList: State;
// }

export interface State {
    ingredients: Ingredient[];
    editedIngrdient: Ingredient;
    editedIngrdientIndex: number;
}

const initialState: State = {
    ingredients: [
        new Ingredient('打死粗奶丸', 5),
        new Ingredient('插人放我!', 1)
    ],
    editedIngrdient: null,
    editedIngrdientIndex: -1
};

export function shoppingListReducer(state: State = initialState, action: ShoppingListActions.ShoppingListActions) {
    switch (action.type) {
        case ShoppingListActions.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload]
            };
        case ShoppingListActions.ADD_INGREDIENTS:
            return {
                ...state,
                ingredients: [...state.ingredients, ...action.payload]
            };
        case ShoppingListActions.UPDATA_INGREDIENT:
            const ingredient = state.ingredients[state.editedIngrdientIndex];
            const udataIngredient = {
                ...ingredient,
                ...action.payload,
                editedIngrdient: null,
                editedIngrdientIndex: -1
            };
            const ingredients = [...state.ingredients];
            ingredients[state.editedIngrdientIndex] = udataIngredient;
            return {
                ...state,
                ingredients: ingredients,
                editedIngrdient: null,
                editedIngrdientIndex: -1
            };
        case ShoppingListActions.DELETE_INGREDIENT:
            const oldIngredients = [...state.ingredients];
            oldIngredients.splice(state.editedIngrdientIndex, 1);
            return {
                ...state,
                ingredients: oldIngredients
            };
        case ShoppingListActions.START_EDIT:
            const editedIngrdient = { ...state.ingredients[action.payload] };
            return {
                ...state,
                editedIngrdient: editedIngrdient,
                editedIngrdientIndex: action.payload
            };
        case ShoppingListActions.STOP_EDIT:
            return {
                ...state,
                editedIngrdient: null,
                editedIngrdientIndex: -1
            };
        default:
            return state;
    }
}
