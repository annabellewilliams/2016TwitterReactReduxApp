import { TWEETS_REQUESTED, TWEETS_RECEIVED } from "../actions/types";

export default function(state = {}, action) {
    switch (action.type) {
        case TWEETS_REQUESTED:
            const user = action.payload;
            return {
                ...state,
                user
            };
        case TWEETS_RECEIVED:
            return {
                ...state,
                tweets: action.tweets
            };
        default:
            return state;
    }
}