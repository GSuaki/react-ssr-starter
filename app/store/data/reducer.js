import { INCREASE_COUNT, STORE_DATA } from '../actions'

const initialState = {
  count: 0 
}

export default function (state = initialState, action) {
  switch (action.type) {
    case STORE_DATA:
      return Object.assign({}, state, { circuits: action.data });
    case INCREASE_COUNT:
      return Object.assign({}, state, {
          count: state.count + 1
      })
    default:
      return state;
  }
}