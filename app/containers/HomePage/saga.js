import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { changeGiphySrc, changeGiphyKeyword } from './actions';
import { LOAD_GIPHY } from './constants';

/**
 * Giphy request/response handler
 */
export function* getGiphy() {
  const API_KEY = process.env.GIPHY_API_KEY;
  const randomURL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&rating=g`;

  try {
    // Call giphy random endpoint to get a keyword (not exactly its purpose, but used here to demonstrate chaining of multiple api calls in sequence)
    // request is a helper that uses fetch api to do http request
    const randomTextResponse = yield call(request, randomURL);
    const keyword = randomTextResponse.data.title;

    // change the keyword in the store to display it on the homePage
    yield put(changeGiphyKeyword(keyword));

    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&rating=g&limit=1&lang=en`;
    const giphyResponse = yield call(request, url);

    yield put(changeGiphySrc(giphyResponse.data[0].images.original.url));
  } catch (err) {
    // handle errors here
    // yield put(giphyLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  // Watches for LOAD_GIPHY actions and calls getGiphy when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // https://redux-saga.js.org/docs/api/#takelatestpattern-saga-args

  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount or if new action comes in

  yield takeLatest(LOAD_GIPHY, getGiphy);
}
