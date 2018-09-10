import { Component } from '@angular/core';
import { FirebaseService } from '../../firebase.service';
import { Response } from '@angular/http';
import { Recipe } from '../../recipes/recope.model';
import { RecipeService } from '../../recipes/recipe.service';
import { AuthService } from '../../auth/auth.service';
import { HttpEvent } from '@angular/common/http';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    constructor(private fbService: FirebaseService, private recipeService: RecipeService, private autnService: AuthService) { }

    onFetch() {
        this.fbService.getRecipe()
            .map((response: Recipe[]) => {
                const recipes = response;
                for (let recipe of recipes) {
                    if (!recipe['ingredients']) {
                        recipe['ingredients'] = []
                    }
                }
                return recipes;
            })
            .subscribe(
                (recipes: Recipe[]) => {
                    this.recipeService.saveRecipes(recipes);
                },
                (error: Response) => console.log(error)
            );
    }

    onSave() {
        this.fbService.putRecipe().subscribe(
            (response) => console.log(response),
            (error: Response) => console.log(error)
        );
    }

    onLogout(){
        this.autnService.logout();
    }
}