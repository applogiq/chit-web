/** ****************************** Import libs *********************************** */
import { deleteDataByIdApi } from "./action";
import { API_ENDPOINT } from "./urls";


export const deleteCart = (id) => deleteDataByIdApi(API_ENDPOINT.cart, id);
