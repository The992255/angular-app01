import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { MyRouteModule } from '../my-route.module';
import { ShardModule } from '../shared/shard.module';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { FirebaseService } from '../firebase.service';
import { AuthService } from '../auth/auth.service';
import { RecipeService } from '../recipes/recipe.service';
import { AuthInterceptor } from '../auth/auth.interceptor';
import { LoggingInterceppor } from '../shared/logging.interceptor';

@NgModule({
    declarations: [
        HomeComponent,
        HeaderComponent
    ],
    imports: [
        MyRouteModule,
        ShardModule
    ],
    providers: [ShoppingListService, RecipeService, FirebaseService, AuthService,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceppor, multi: true }],
    exports: [
        MyRouteModule,
        HeaderComponent
    ]
})
export class CoreModule { }
