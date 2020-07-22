import {FETCH_FAILURE, FETCH_REQUEST, FETCH_SUCCESS} from "../actions/actionTypes";

const search = (state = [], action) => {
    switch (action.type) {
        case FETCH_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_SUCCESS:
            return {
                loading: false,
                searched: action.payload,
                error: ''
            };
        case FETCH_FAILURE:
            return {
                loading: false,
                pokemon: [],
                error: action.payload
            };
        default: return state;
    }
};

export default search;