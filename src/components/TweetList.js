import React from 'react';
import Tweet from './Tweet';

const TweetList = ({ tweets }) => {

    const renderTweets = () => {
        if (tweets) {
            return tweets.map((tweet) => {
                return (
                    <div key={tweet.id}>
                        <Tweet content={tweet} />
                        <hr />
                    </div>
                );
            });
        }
        return <div />;
    }


    return (
        <ul className="list-unstyled">
            { renderTweets() }
        </ul>
    );
};

export default TweetList;