/** ****************************** Import libs *********************************** */
import { postDataApi } from "./action";
import { API_ENDPOINT } from "./urls";


export const createCart = (params) => postDataApi(API_ENDPOINT.cart, params);
