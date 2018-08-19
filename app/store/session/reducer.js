import { INITIALIZE_SESSION } from '../actions'

const initialState = false

export default function (state = initialState, action) {
  switch (action.type) {
    case INITIALIZE_SESSION:
      return true;
    default:
      return state;
  }
}