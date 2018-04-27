/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectGiphySrc = () => createSelector(
  selectHome,
  (homeState) => homeState.get('giphySrc')
);

const makeSelectGiphyKeyword = () => createSelector(
  selectHome,
  (homeState) => homeState.get('giphyKeyword')
);

export {
  selectHome,
  makeSelectGiphySrc,
  makeSelectGiphyKeyword,
};
