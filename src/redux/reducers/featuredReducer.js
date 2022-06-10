/** **************************** Import Types ****************************** */
import { FEATURED_REQUEST, FEATURED_SUCCESS, FEATURED_FAILURE } from "../types/featured";

const initialState = {
    featuredResponse: "",
    error: "",
    loading: false,
};

const featuredReducer = (state = initialState, action) => {
    switch (action.type) {
        case FEATURED_REQUEST:
            return {
                ...state,
                featuredResponse: "",
                loading: true,
            };
        case FEATURED_SUCCESS:
            return {
                ...state,
                featuredResponse: action.payload,
                loading: false,
            };
        case FEATURED_FAILURE:
            return {
                ...state,
                featuredResponse: "error",
                error: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};

export default featuredReducer;