import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Recipe } from '../../recipes/recope.model';
import { FirebaseService } from '../../firebase.service';
import { RecipeService } from '../../recipes/recipe.service';
import { AuthService } from '../../auth/auth.service';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducers';
import * as fromAuth from '../../auth/store/auth.reducer';
import * as AuthActions from '../../auth/store/auth.actions';
import * as RecipeActions from '../../recipes/store/recipe.actions';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
    authState: Observable<fromAuth.State>;
    constructor(private fbService: FirebaseService, private recipeService: RecipeService, private autnService: AuthService,
        private store: Store<fromApp.AppState>) { }

    ngOnInit() {
        this.authState = this.store.select('auth');
    }

    onFetch() {
        this.store.dispatch(new RecipeActions.FetchRecipes());
        // this.fbService.getRecipe()
        //     .map((response: Recipe[]) => {
        //         const recipes = response;
        //         for (const recipe of recipes) {
        //             if (!recipe['ingredients']) {
        //                 recipe['ingredients'] = [];
        //             }
        //         }
        //         return recipes;
        //     })
        //     .subscribe(
        //         (recipes: Recipe[]) => {
        //             this.recipeService.saveRecipes(recipes);
        //         },
        //         (error: Response) => console.log(error)
        //     );
    }

    onSave() {
        // this.fbService.putRecipe().subscribe(
        //     (response) =>
        //     (error: Response) => console.log(error)
        // );
        this.store.dispatch(new RecipeActions.StoreRecipes());
    }

    onLogout() {
        // this.autnService.logout();
        this.store.dispatch(new AuthActions.Logout());
    }
}
