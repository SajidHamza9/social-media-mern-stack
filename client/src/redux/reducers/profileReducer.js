import { GET_USER_PROFILE } from '../actions/types';

const initialState = {
    username: null,
    pdp: null,
    followers: null,
    following: null
};


export default function(state = initialState, action) {
    switch(action.type) {
        case GET_USER_PROFILE:
            return {
                ...state,
                username: action.payload.username,
                pdp: action.payload.pdp,
                followers: action.payload.followers,
                following: action.payload.following
            };
        default:
            return state;
    }
}