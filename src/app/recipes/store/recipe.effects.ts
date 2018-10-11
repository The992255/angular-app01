import { Effect, Actions } from '@ngrx/effects';

import * as RecipeActions from '../store/recipe.actions';
import * as fromRecipe from '../store/recipe.reducers';
import { Injectable } from '@angular/core';
import { Recipe } from '../recope.model';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

@Injectable()
export class RecipeEffects {
    @Effect()
    recipeFetch = this.actions$.ofType(RecipeActions.FETCH_RECIPES).switchMap((action: RecipeActions.FetchRecipes) => {
        return this.httpClient.get<Recipe[]>('https://angular-learn-d3dbe.firebaseio.com/recipes.json', {
            observe: 'body',
            responseType: 'json'
        })
            .map((response) => {
                for (const recipe of response) {
                    if (!recipe['ingredients']) {
                        recipe['ingredients'] = [];
                    }
                }
                return {
                    type: RecipeActions.SET_RECIPES,
                    payload: response
                };
            })
            .catch((error: Response) => {
                return Observable.throw(error.statusText);
            });
    });

    @Effect({ dispatch: false })
    recipeStore = this.actions$.ofType(RecipeActions.STORE_RECIPES).withLatestFrom(this.store.select('recipes'))
        .switchMap(([action, state]) => {
            const req = new HttpRequest('PUT', 'https://angular-learn-d3dbe.firebaseio.com/recipes.json',
                state.recipes, { reportProgress: true });
            return this.httpClient.request(req);
        });

    constructor(private actions$: Actions, private httpClient: HttpClient, private store: Store<fromRecipe.FeatuerState>) { }
}
