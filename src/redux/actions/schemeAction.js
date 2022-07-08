/** **************************** Import Types ****************************** */
import {
    SCHEME_REQUEST,
    SCHEME_SUCCESS,
    SCHEME_FAILURE,
} from "../types/schemeType";
import { getScheme } from "../../api/list";

/** **************************** Import API ****************************** */

export const schemeRequest = () => ({
    type: SCHEME_REQUEST,
});

export const schemeSuccess = (users) => ({
    type: SCHEME_SUCCESS,
    payload: users,
});

export const schemeFailure = (error) => ({
    type: SCHEME_FAILURE,
    payload: error,
});

export const getSchemeData = (params) =>
    async function (dispatch) {
        dispatch(schemeRequest());
        return getScheme(params)
            .then((res) => {
                if (res) {
                    dispatch(schemeSuccess(res));
                    return res;
                }
                dispatch(schemeFailure(res.message));
                return res.message;
            })
            .catch((err) => console.log("Catch Error:", err));
    };
