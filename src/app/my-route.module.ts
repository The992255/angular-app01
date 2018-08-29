import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent, children: [
    { path: '', component: RecipeStartComponent },
    { path: 'new', component: RecipeEditComponent},
    //new必須放在最前方，因為會跟:id衝突
    { path: ':id', component: RecipeDetailComponent },
    { path: ':id/edit', component: RecipeEditComponent}
  ]},
  { path: 'shopping-list', component: ShoppingListComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  //初始路由器，並讓他監聽網址變化
  exports: [RouterModule]
})
export class MyRouteModule { }
