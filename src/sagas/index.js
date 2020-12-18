import { takeEvery, call, put, all } from 'redux-saga/effects';
import axios from 'axios';

import { TWEETS_REQUESTED, TWEETS_RECEIVED } from "../actions/types";

export function* watchFetchTweetsAsync() {
    yield takeEvery(TWEETS_REQUESTED, fetchTweetsAsync);
}

export function* fetchTweetsAsync(action) {

    const config = {
        method: 'get',
        url: `https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${action.payload}&tweet_mode=extended`,
        headers: {
            'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAAKDYKgEAAAAAL%2F%2Bc27mbH8kYY%2Fm0p%2BDKbV8Up8w%3DQsNnphwGwGlcW6FpQh487pxr5VX0OYSDLQ8KD8hA9plQemw890',
            'Access-Control-Allow-Origin': '*'
        }
    };
    const tweets = yield call(axios, config);

    // create and yield a dispatch Effect
    yield put({ type: TWEETS_RECEIVED, tweets: tweets.data });
}

export default function* rootSaga() {
    yield all([watchFetchTweetsAsync()]);
}
