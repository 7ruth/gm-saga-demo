/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import {
  CHANGE_GIPHY_SRC,
  CHANGE_GIPHY_KEYWORD,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  giphySrc: '',
  giphyKeyword: '',
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_GIPHY_SRC:
      return state
        .set('giphySrc', action.url);
    case CHANGE_GIPHY_KEYWORD:
      return state
        .set('giphyKeyword', action.keyword);
    default:
      return state;
  }
}

export default homeReducer;
