import { Injectable } from "@angular/core";
import { Headers, Http, Response } from "@angular/http";
import { RecipeService } from "./recipes/recipe.service";
import 'rxjs/Rx'
import { Observable } from "rxjs/Rx";
import { AuthService } from "./auth/auth.service";

@Injectable()
export class FirebaseService {
    constructor(private http: Http, private recipeService: RecipeService, private authService: AuthService) { }

    putRecipe() {
        const token = this.authService.getToken();
        const headers = new Headers({ 'Content-Type': 'appliction/json' })
        const recipe = this.recipeService.getRecipes();
        return this.http.put('https://angular-learn-d3dbe.firebaseio.com/recipes.json?auth=' + token, recipe, { headers: headers })
            .map((response: Response) => {
                return response;
            })
            .catch((error: Response) => {
                return Observable.throw(error.statusText);
            })
    }

    getRecipe() {
        const token = this.authService.getToken();
            
        return this.http.get('https://angular-learn-d3dbe.firebaseio.com/recipes.json?auth=' + token)
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: Response) => {
                return Observable.throw(error.statusText);
            })
    }
}