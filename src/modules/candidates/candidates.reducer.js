import {
  GET_CANDIDATES,
  VOTE,
  GET_VOTES,
} from './candidates.constants'

const initialState = []

export default (state = initialState, action) => {
  const actions = {
    [`${GET_CANDIDATES}_FULFILLED`]: () => ([
      ...action.payload,
    ]),
    [`${VOTE}_FULFILLED`]: () => state.reduce((result, candidate) => {
      if (candidate.name === action.candidate) {
        result.push({ name: candidate.name, votes: action.payload.votes })
      } else {
        result.push({ ...candidate })
      }
      return result
    }, []),
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
