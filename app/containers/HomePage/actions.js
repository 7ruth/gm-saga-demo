/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  CHANGE_GIPHY_KEYWORD,
  CHANGE_GIPHY_SRC,
  LOAD_GIPHY,
} from './constants';

/**
 * Load giphy api, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_GIPHY
 */
export function loadGiphy() {
  return {
    type: LOAD_GIPHY,
  };
}

/**
 * Changes the src provided by giphy api
 *
 * @param  {url} url A url of a gif
 *
 * @return {object}    An action object with a type of CHANGE_GIPHY_SRC
 */
export function changeGiphySrc(url) {
  return {
    type: CHANGE_GIPHY_SRC,
    url,
  };
}

/**
 * Changes the keyword provided by giphy random endpoint to display it to the front end
 *
 * @param  {keyword} keyword Giphy random keyword
 *
 * @return {object}    An action object with a type of CHANGE_GIPHY_KEYWORD
 */
export function changeGiphyKeyword(keyword) {
  return {
    type: CHANGE_GIPHY_KEYWORD,
    keyword,
  };
}
