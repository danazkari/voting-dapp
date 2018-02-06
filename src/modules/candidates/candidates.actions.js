import {
  GET_CANDIDATES,
  VOTE,
  NEW_CANDIDATE,
} from './candidates.constants'
import { VotingContract } from 'contracts-api'

export const getCandidates = () => {
  return {
    type: GET_CANDIDATES,
    payload: (new VotingContract()).getAllCandidates(),
  }
}

export const postulateNewCandidate = () => {
  return {
    type: NEW_CANDIDATE,
    payload: (new VotingContract())
      .proposeCandidate({ type: 'random' })
      // .then(() => new Promise(resolve => setTimeout(resolve, 5000)))
      .then(() => (new VotingContract()).getAllCandidates()),
  }
}

export const vote = (candidateName) => {
  return {
    type: VOTE,
    payload: (new VotingContract())
      .castVote(candidateName)
      //  .then(() => new Promise(resolve => setTimeout(resolve, 5000)))
      .then(() => (new VotingContract()).getAllCandidates()),
  }
}
