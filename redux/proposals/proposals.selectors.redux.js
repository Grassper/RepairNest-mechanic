import { createSelector } from "reselect";

const selectProposal = (state) => state.proposal;

export const selectProposalList = createSelector(
  [selectProposal],
  (proposal) => proposal.proposalsList
);
