import { proposalsTypes } from "./proposals.types.redux";
import Proposal from "../../models/proposal.model";

// importing dummy data
import fakeProposals from "../../data/proposal1.dummy.data";

const proposalModeler = (proposalArray) => {
  const result = proposalArray.map((proposal) => {
    return new Proposal(
      proposal.id,
      proposal.clientId,
      proposal.clientName,
      proposal.clientImageUrl,
      proposal.fare,
      proposal.distance,
      proposal.repairType,
      proposal.location,
      proposal.problem,
      proposal.orderStatus
    );
  });
  return result;
};

const INITIAL_STATE = {
  proposalsList: proposalModeler(fakeProposals),
};

const proposalReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case proposalsTypes.FETCH_PROPOSALS_SUCCESS:
      const { payload } = action;
      const proposalsList = proposalModeler(payload);
      return {
        ...state,
        proposalsList,
      };
    default:
      return state;
  }
};

export default proposalReducers;
