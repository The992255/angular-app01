import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { AutnGuard } from './auth/auth-guard.service';

const routes: Routes = [
  // { path: '', redirectTo: 'recipes', pathMatch: 'full' },
  { path: 'recipes', loadChildren: './recipes/recipe.module#RecipesModule', canActivate: [AutnGuard] },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  // 初始路由器，並讓他監聽網址變化
  providers: [AutnGuard],
  exports: [RouterModule]
})
export class MyRouteModule { }
