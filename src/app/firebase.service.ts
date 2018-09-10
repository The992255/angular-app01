import { Injectable } from "@angular/core";
import { Headers, Response } from "@angular/http";
import { RecipeService } from "./recipes/recipe.service";
import 'rxjs/Rx'
import { Observable } from "rxjs/Rx";
import { AuthService } from "./auth/auth.service";
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from "@angular/common/http";
import { Recipe } from "./recipes/recope.model";

@Injectable()
export class FirebaseService {
    constructor(private httpClient: HttpClient, private recipeService: RecipeService, private authService: AuthService) { }

    putRecipe() {
        // const token = this.authService.getToken();
        const recipe = this.recipeService.getRecipes();
        // return this.httpClient.put('https://angular-learn-d3dbe.firebaseio.com/recipes.json', recipe, {
        //     observe: 'body',
        //     params: new HttpParams().set('auth', token)
        // })
        //     .map((response) => {
        //         return response;
        //     })
        //     .catch((error: Response) => {
        //         return Observable.throw(error.statusText);
        //     })
        // const req = new HttpRequest('PUT', 'https://angular-learn-d3dbe.firebaseio.com/recipes.json',
        //     recipe, { reportProgress: true, params: new HttpParams().set('auth', token) })
            const req = new HttpRequest('PUT', 'https://angular-learn-d3dbe.firebaseio.com/recipes.json',
            recipe, { reportProgress: true})
        return this.httpClient.request(req);
    }

    getRecipe() {
        // const token = this.authService.getToken();

        // return this.httpClient.get<Recipe[]>('https://angular-learn-d3dbe.firebaseio.com/recipes.json?auth=' + token)
        // return this.httpClient.get<Recipe[]>('https://angular-learn-d3dbe.firebaseio.com/recipes.json?auth=' + token, {
            return this.httpClient.get<Recipe[]>('https://angular-learn-d3dbe.firebaseio.com/recipes.json', {
            observe: 'body',
            responseType: 'json'
        })
            .map((response) => {
                return response;
            })
            .catch((error: Response) => {
                return Observable.throw(error.statusText);
            })
    }
}