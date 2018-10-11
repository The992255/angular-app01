import { Recipe } from '../recope.model';
import { Ingredient } from '../../shared/ingredient.model';

import * as RecipeActions from './recipe.actions';
import * as fromApp from '../../store/app.reducers';

export interface FeatuerState extends fromApp.AppState {
    recipes: State;
}

export interface State {
    recipes: Recipe[];
}

const initalState: State = {
    recipes: [
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
    ],
};

export function recipeReducer(state = initalState, action: RecipeActions.RecipeActions) {
    switch (action.type) {
        case (RecipeActions.SET_RECIPES):
            return {
                ...state,
                recipes: [...action.payload]
            };
        case (RecipeActions.ADD_RECIPE):
            return {
                ...state,
                recipes: [...state.recipes, action.payload]
            };
        case (RecipeActions.UPDATE_RECIPE):
            const recipe = state.recipes[action.payload.index];
            const updatedRecipe = {
                ...recipe,
                ...action.payload.updateRecipe
            };
            const recipes = [...state.recipes];
            recipes[action.payload.index] = updatedRecipe;
            return {
                ...state,
                recipes: recipes
            };
        case (RecipeActions.DELETE_RECIPE):
            const derecipes = [...state.recipes];
            derecipes.splice(action.payload, 1);
            return {
                ...state,
                recipes: derecipes
            };
    }
    return state;
}
