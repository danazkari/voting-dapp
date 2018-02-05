import {
  GET_CANDIDATES,
  VOTE,
  NEW_CANDIDATE,
  GET_VOTES,
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
    payload: (new VotingContract()).proposeCandidate({ type: 'random' }),
  }
}

export const vote = (candidateName) => {
  return {
    type: VOTE,
    payload: (new VotingContract()).castVote(candidateName),
  }
}

export const getVotes = (candidate) => {
  return {
    type: GET_VOTES,
    payload: (new VotingContract()).getCandidateVotes(candidate),
  }
}
