import { getCandidates } from 'modules/candidates'
import { VotingContract } from 'contracts-api'

export default async (dispatch, getState) => {
  // FIXME: Events are not working yet because of issue with MetaMask
  await (new VotingContract())
    .updateCandidatesEventListener((error, candidateList) => {
      dispatch(getCandidates())
    })
}
