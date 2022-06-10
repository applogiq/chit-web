/** **************************** Import Types ****************************** */
import { FEATURED_REQUEST, FEATURED_SUCCESS, FEATURED_FAILURE } from "../types/featured";
// import { getFeatured } from "../../api/list"

/** **************************** Import API ****************************** */

export const featuredRequest = () => ({
    type: FEATURED_REQUEST,
});

export const featuredSuccess = (users) => ({
    type: FEATURED_SUCCESS,
    payload: users,
});

export const featuredFailure = (error) => ({
    type: FEATURED_FAILURE,
    payload: error,
});


// export const GetFeaturedProducts = (params) =>
//     async function (dispatch) {
//         dispatch(featuredRequest())
//         return getFeatured(params)
//             .then((res) => {
//                 if (res) {
//                     dispatch(featuredSuccess(res));
//                     return res;
//                 }
//                 dispatch(featuredFailure(res.message));
//                 return res.message;
//             })
//             .catch((err) => console.log("Catch Error:", err));
//     };