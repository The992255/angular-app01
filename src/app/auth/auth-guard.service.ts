import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import { AuthService } from "./auth.service";
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromApp from '../store/app.reducers';
import * as fromAuth from './store/auth.reducer';

@Injectable()
export class AutnGuard implements CanActivate {

    // constructor(private authService: AuthService) { }
    // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //     return this.authService.isAuthenticated();
    // }
    // canLoad(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //     return this.authService.isAuthenticated();
    // }
    constructor(private store: Store<fromApp.AppState>) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.store.select('auth').take(1).map((autnState: fromAuth.State) => {
            return autnState.authenticared;
        });
    }

    // canLoad(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //     // return this.store.select('auth').map((autnState: fromAuth.State) => {
    //     //     console.log(autnState.authenticared);
    //     //     return autnState.authenticared;
    //     // });
    //     return true;
    // }
}
