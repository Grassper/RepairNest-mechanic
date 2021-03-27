import { proposalsTypes } from "./proposals.types.redux";

export const fetchProposalsSuccess = (proposalsList) => ({
  type: proposalsTypes.FETCH_PROPOSALS_SUCCESS,
  payload: proposalsList,
});
