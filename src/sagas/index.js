import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { TWEETS_REQUESTED, TWEETS_SUCCEEDED, TWEETS_FAILED } from "../actions/types";


export function* fetchTweetsAsync(action) {

    try {
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
        yield put({ type: TWEETS_SUCCEEDED, payload: tweets.data });
    } catch (e) {
        yield put({ type: TWEETS_FAILED, payload: e.message });
    }

}

export default function* rootSaga() {
    yield takeLatest(TWEETS_REQUESTED, fetchTweetsAsync);
}
