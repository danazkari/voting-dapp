import {
  GET_CANDIDATES,
  VOTE,
  GET_VOTES,
  NEW_CANDIDATE,
} from './candidates.constants'

const initialState = []

export default (state = initialState, action) => {
  const actions = {
    [`${GET_CANDIDATES}_FULFILLED`]: () => {
      const totalVotes = action.payload.reduce((result, { votes }) => result + votes, 0)
      return action.payload.map(candidate => ({
        ...candidate,
        percentage: totalVotes ? candidate.votes / totalVotes : 0,
      }))
    },
    [`${VOTE}_FULFILLED`]: () => {
      const totalVotes = action.payload.reduce((result, { votes }) => result + votes, 0)
      return action.payload.map(candidate => ({
        ...candidate,
        percentage: totalVotes ? candidate.votes / totalVotes : 0,
      }))
    },
    [`${NEW_CANDIDATE}_FULFILLED`]: () => {
      const totalVotes = action.payload.reduce((result, { votes }) => result + votes, 0)
      return action.payload.map(candidate => ({
        ...candidate,
        percentage: totalVotes ? candidate.votes / totalVotes : 0,
      }))
    },
    [`${GET_VOTES}_FULFILLED`]: () => state.reduce((result, candidate) => {
      if (candidate.name === action.candidate) {
        result.push({ name: candidate.name, votes: action.payload.votes })
      } else {
        result.push({ ...candidate })
      }
      return result
    }, []),
  }

  const actionToExecute = actions[action.type]

  return actionToExecute ? actionToExecute() : [ ...state ]
}
