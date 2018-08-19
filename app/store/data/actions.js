import { fetchCircuits } from "../../../api/api";

import { STORE_DATA, INCREASE_COUNT } from '../actions'

const storeData = ( data ) => ( {
  type: STORE_DATA,
  data,
} );

const increaseCountData = ( ) => ( {
  type: INCREASE_COUNT
} );

export const fetchData = ( ) => {
  return dispatch => fetchCircuits( )
    .then( res => dispatch( storeData( res ) ) );
}

export const increaseCount = ( ) => {
  return dispatch => dispatch( increaseCountData( ) )
};

export default {
  fetchData,
  increaseCount
}