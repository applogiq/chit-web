/** **************************** Import Types ****************************** */
import {
    SCHEME_REQUEST,
    SCHEME_SUCCESS,
    SCHEME_FAILURE,
} from "../types/schemeType";

const initialState = {
    schemeResponse: "",
    error: "",
    loading: false,
};

const schemeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SCHEME_REQUEST:
            return {
                ...state,
                schemeResponse: "",
                loading: true,
            };
        case SCHEME_SUCCESS:
            return {
                ...state,
                schemeResponse: action.payload,
                loading: false,
            };
        case SCHEME_FAILURE:
            return {
                ...state,
                schemeResponse: "error",
                error: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};

export default schemeReducer;
