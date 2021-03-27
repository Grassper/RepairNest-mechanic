import { createSelector } from "reselect";

const selectAccount = (state) => state.account;

export const selectAccountDetails = createSelector(
  [selectAccount],
  (account) => account.accountDetails
);
