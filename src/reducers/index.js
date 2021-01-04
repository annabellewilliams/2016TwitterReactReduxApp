import { combineReducers } from "redux";

import { TWEETS_SUCCEEDED } from "../actions/types";


const tweetsReducer = (tweets = null, action) => {
    if (action.type === TWEETS_SUCCEEDED) {
        return action.payload;
    }
    return tweets;
}

export default combineReducers({
    tweets: tweetsReducer
});