import * as AuthActions from './auth.actions';

export interface State {
    token: string;
    authenticared: boolean;
}

const initalState: State = {
    token: null,
    authenticared: false
};


export function authReducer(state = initalState, action: AuthActions.AuthActions) {
    switch (action.type) {
        case (AuthActions.SIGNUP):
        case (AuthActions.SIGNIN):
            return {
                ...state,
                authenticared: true
            };
        case (AuthActions.LOGOUT):
            return {
                ...state,
                token: null,
                authenticared: false
            };
        case (AuthActions.SET_TOKEN):
            return {
                ...state,
                token: action.payload
            };
        default:
            return state;

    }
}
