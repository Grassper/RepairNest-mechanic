import { combineReducers } from "redux";

// importing reducers
import accountReducer from "./accounts/account.reducers.redux";

const rootReducer = combineReducers({
  account: accountReducer,
});

export default rootReducer;
