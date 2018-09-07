import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ShoppingListComponent } from "./shopping-list.component";

const shoppingRoutrs: Routes = [
    { path: 'shopping-list', component: ShoppingListComponent}
]

@NgModule({
    imports: [
        RouterModule.forChild(shoppingRoutrs)
    ],
    exports: [RouterModule]
})
export class ShoppingRoutingModule{}