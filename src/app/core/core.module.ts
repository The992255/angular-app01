import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";
import { MyRouteModule } from "../my-route.module";
import { ShardModule } from "../shared/shard.module";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { FirebaseService } from "../firebase.service";
import { AuthService } from "../auth/auth.service";
import { RecipeService } from "../recipes/recipe.service";

@NgModule({
    declarations: [
        HomeComponent,
        HeaderComponent
    ],
    imports: [
        MyRouteModule,
        ShardModule
    ],
    providers: [ShoppingListService, RecipeService, FirebaseService, AuthService],
    exports: [
        MyRouteModule,
        HeaderComponent
    ]
})
export class CoreModule { }