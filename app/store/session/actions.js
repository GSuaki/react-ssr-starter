import { INITIALIZE_SESSION } from '../actions'

const initializeSessionRequest = () => ({ type: INITIALIZE_SESSION });

export function initializeSession() {
  return dispatch => dispatch(initializeSessionRequest())
}

export default {
  initializeSession
}