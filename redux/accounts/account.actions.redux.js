import { accountTypes } from "./account.types.redux";

export const fetchAccountDetailsSuccess = (accountDetails) => ({
  type: accountTypes.FETCH_ACCOUNT_DETAILS_SUCCESS,
  payload: accountDetails,
});
