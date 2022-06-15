/** **************************** Import Libs ****************************** */
import { combineReducers } from "redux";

/** **************************** Import Reducers ****************************** */
import featuredReducer from "./reducers/featuredReducer";
import schemeReducer from "./reducers/schemeReducer";


const rootReducer = combineReducers({
    featured: featuredReducer,
    scheme: schemeReducer,
});

export default rootReducer;
