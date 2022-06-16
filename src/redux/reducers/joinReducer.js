/** **************************** Import Types ****************************** */
export const JOIN_REQUEST = "JOIN_REQUEST";
export const JOIN_SUCCESS = "JOIN_SUCCESS";
export const JOIN_FAILURE = "JOIN_FAILURE";


const initialState = {
    joinResponse: "",
    error: "",
    loading: false,
};

const joinReducer = (state = initialState, action) => {
    switch (action.type) {
        case JOIN_REQUEST:
            return {
                ...state,
                joinResponse: "",
                loading: true,
            };
        case JOIN_SUCCESS:
            return {
                ...state,
                joinResponse: action.payload,
                loading: false,
            };
        case JOIN_FAILURE:
            return {
                ...state,
                joinResponse: "error",
                error: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};

export default joinReducer;
