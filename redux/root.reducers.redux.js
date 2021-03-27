import { combineReducers } from "redux";

// importing reducers
import accountReducer from "./accounts/account.reducers.redux";
import proposalReducers from "./proposals/proposals.reducers.redux";

const rootReducer = combineReducers({
  account: accountReducer,
  proposal: proposalReducers,
});

export default rootReducer;
