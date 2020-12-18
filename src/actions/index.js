import { TWEETS_REQUESTED } from "./types";

export function fetchTweets(screenName) {

    return {
        type: TWEETS_REQUESTED,
        payload: screenName
    };
}