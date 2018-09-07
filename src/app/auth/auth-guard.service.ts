import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AutnGuard implements CanActivate {

    constructor(private authService: AuthService) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.authService.isAuthenticated();
    }
    canLoad(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.authService.isAuthenticated();
    }
}