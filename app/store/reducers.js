import { combineReducers } from 'redux';

import data from './data/reducer'
import session from './session/reducer'

export default combineReducers({ data, loggedIn: session });
