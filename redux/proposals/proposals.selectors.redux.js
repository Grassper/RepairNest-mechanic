import { createSelector } from "reselect";

const selectProposal = (state) => state.proposal;

export const selectProposalList = createSelector(
  [selectProposal],
  (proposal) => proposal.proposalsList
);

export const selectIndividualProposal = (proposalId) =>
  createSelector([selectProposalList], (proposalList) =>
    proposalList.find((proposal) => proposal.id === proposalId)
  );
