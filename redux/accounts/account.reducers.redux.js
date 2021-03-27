import { accountTypes } from "./account.types.redux";
import Account from "../../models/account.model";

const INITIAL_STATE = {
  accountDetails: new Account(
    "1",
    "Vadivazhagan",
    "https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80",
    "+91-9867564321",
    "freeslab88@gmail.com",
    new Date(),
    "male"
  ),
};

const accountReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case accountTypes.FETCH_ACCOUNT_DETAILS_SUCCESS:
      const { payload } = action;
      return {
        ...state,
        accountDetails: new Account(
          payload.id,
          payload.profileName,
          payload.profileUrl,
          payload.phoneNumber,
          payload.email,
          payload.birthday,
          payload.gender
        ),
      };
    default:
      return state;
  }
};

export default accountReducer;
