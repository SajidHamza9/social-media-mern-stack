import { 
        USER_LOADED, 
        USER_LOADING, 
        AUTH_ERROR, 
        REGISTER_SUCCESS, 
        REGISTER_FAIL ,
        LOGING_SUCCESS,
        LOGIN_FAIL,
        LOGOUT_SUCCESS,
        IS_AUTH
    } from '../actions/types';

const initialState = {
    token: localStorage.getItem('token'),
    currentUserId: localStorage.getItem('currentUserId'),
    isAuth: false,
    isLoading: false,
    user: null
};

export default function(state = initialState, action) {
    switch(action.type) {
        case USER_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case USER_LOADED:
            return {
                ...state,
                isAuth: true,
                isLoading: false,
                user: action.payload
            };
        case REGISTER_SUCCESS:
        case LOGING_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            localStorage.setItem('currentUserId', action.payload.user.id);
            return {
                ...state,
                ...action.payload,
                isAuth: true,
                isLoading: false
            };
        case AUTH_ERROR:
        case REGISTER_FAIL:
        case LOGIN_FAIL:
            localStorage.removeItem('token');
            localStorage.removeItem('currentUserId');
            return {
                ...state,
                token: null,
                user: null,
                isAuth: false,
                isLoading: false
            }
        case IS_AUTH:
            return state.isAuth;

        default:
            return state;
    }
}