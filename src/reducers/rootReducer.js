import { combineReducers } from "redux";
import currentProductReducer from "./currentProductReducer"

const rootReducer=combineReducers({
    currentProduct:currentProductReducer
})
export default rootReducer