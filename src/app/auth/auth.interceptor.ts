import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
// import { AuthService } from "./auth.service";
import { Store } from '@ngrx/store';

import * as fromApp from '../store/app.reducers';
import * as fromAuth from './store/auth.reducer';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private store: Store<fromApp.AppState>) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // console.log('req: ', req);
        // const copiedReq = req.clone({headers: req.headers.append('', '')});
        return this.store.select('auth').take(1).switchMap((authState: fromAuth.State) => {
            const copiedReq = req.clone({ params: req.params.set('auth', authState.token) });
            return next.handle(copiedReq);
        });
    }
}
