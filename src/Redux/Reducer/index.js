import crudReducer from "./crudReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    crud : crudReducer
})

export default rootReducer