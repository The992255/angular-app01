import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/messaging';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromApp from '../store/app.reducers';
import * as fromAuth from './store/auth.reducer';
import * as AuthActions from './store/auth.actions';

@Injectable()
export class AuthService {
    token: string;

    constructor(private router: Router, private store: Store<fromApp.AppState>) { }

    singupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(
                user => {
                    this.store.dispatch(new AuthActions.Signup());
                })
            .catch(
                error => console.log(error)
            );
    }

    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                this.store.dispatch(new AuthActions.Signin());
                this.router.navigate(['/']);
                firebase.auth().currentUser.getIdToken()
                    .then((token: string) => {
                        this.store.dispatch(new AuthActions.SetToken(token));
                    });
            })
            .catch(
                error => console.log(error)
            );
    }

    logout() {
        firebase.auth().signOut();
        // this.token = null;
        this.store.dispatch(new AuthActions.Logout());
    }

    // getToken() {
    //     firebase.auth().currentUser.getIdToken()
    //         .then((token: string) => {
    //             this.token = token;
    //         });
    //     return this.token;
    // }

    // isAuthenticated() {
    //     return this.token != null;
    // }
}
