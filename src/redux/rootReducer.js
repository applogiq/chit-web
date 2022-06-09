/** **************************** Import Libs ****************************** */
import { combineReducers } from "redux";

/** **************************** Import Reducers ****************************** */
import featuredReducer from "./reducers/featuredReducer";


const rootReducer = combineReducers({
    featured: featuredReducer,
});

export default rootReducer;
