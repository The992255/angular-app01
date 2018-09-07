import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RecipesComponent } from '../recipes/recipes.component';
import { RecipeDetailComponent } from '../recipes/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from '../recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from '../recipes/recipe-edit/recipe-edit.component';
import { AutnGuard } from '../auth/auth-guard.service';

const recipesRoutrs: Routes = [
    { path: '', component: RecipesComponent, children: [
        { path: '', component: RecipeStartComponent },
        { path: 'new', component: RecipeEditComponent, canActivate: [ AutnGuard ]},
        //new必須放在最前方，因為會跟:id衝突
        { path: ':id', component: RecipeDetailComponent },
        { path: ':id/edit', component: RecipeEditComponent, canActivate: [AutnGuard]}
      ]}
]

@NgModule({
    imports: [
        RouterModule.forChild(recipesRoutrs)
    ],
    providers: [ AutnGuard ],
    exports: [RouterModule]
})
export class RecipeRoutingModule{}