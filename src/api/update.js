/** ****************************** Import libs *********************************** */
import { putDataByIdApi, putDataApi } from "./action";
import { API_ENDPOINT } from "./urls";

export const updateCart = (params, id) => putDataApi(API_ENDPOINT.cart, params, id);
