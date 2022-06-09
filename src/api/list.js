/** ****************************** Import libs *********************************** */
import { viewDataByApi, getListByApi } from "./action";
import { API_ENDPOINT } from "./urls";

export const getCartById = (dataId) => viewDataByApi(API_ENDPOINT.cartUser, dataId);

export const getcart = (params) => getListByApi(API_ENDPOINT.cartUser, params);