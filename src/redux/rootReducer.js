/** **************************** Import Libs ****************************** */
import { combineReducers } from "redux";

/** **************************** Import Reducers ****************************** */
import featuredReducer from "./reducers/featuredReducer";
import schemeReducer from "./reducers/schemeReducer";
import joinReducer from "./reducers/joinReducer";


const rootReducer = combineReducers({
    featured: featuredReducer,
    scheme: schemeReducer,
    joinscheme: joinReducer,
});

export default rootReducer;
