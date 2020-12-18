import Media from 'react-bootstrap/Media';
import React from 'react';
import { unescape } from 'underscore';
import { HeartIcon, ArrowSwitchIcon, VerifiedIcon } from '@primer/octicons-react';

export default ({ content }) => {

    const tweetData = content.retweeted_status ?
        {
            currentUser: content.user.name,
            name: content.entities.user_mentions[0].name,
            screenName: content.entities.user_mentions[0].screen_name,
            verified: content.retweeted_status.user.verified,
            profileImageUrl: content.retweeted_status.user.profile_image_url_https,
            fullText: unescape(content.retweeted_status.full_text),
            favoriteCount: content.retweeted_status.favorite_count,
            retweetCount: content.retweeted_status.retweet_count,
            retweeted: true
        } :
        {
            currentUser: content.user.name,
            name: content.user.name,
            screenName: content.user.screen_name,
            verified: content.user.verified,
            profileImageUrl: content.user.profile_image_url_https,
            fullText: unescape(content.full_text),
            favoriteCount: content.favorite_count,
            retweetCount: content.retweet_count,
            retweeted: false
        };

    return (
        <div>
            {
                tweetData.retweeted ?
                    <div className="text-muted font-weight-bold small mb-2 ml-5">
                        <ArrowSwitchIcon size={16} /> {tweetData.currentUser} Retweeted
                    </div>
                    :
                    <span />
            }
            <Media as="li" className="mb-3">
                <img
                    width={64}
                    height={64}
                    className="mr-3 rounded-circle"
                    src={ tweetData.profileImageUrl }
                    alt={ tweetData.name }
                />
                <Media.Body>
                    <h5>
                        <a href={`https://twitter.com/${tweetData.screenName}`} className="text-dark mr-2" target="_blank">
                            { tweetData.name }
                        </a>
                        {
                            tweetData.verified ?
                                <span className="mr-2 text-primary">
                            <VerifiedIcon size={16} verticalAlign='middle' />
                        </span>
                                :
                                <span />
                        }
                        <span className="text-muted font-weight-light">
                    <small>@{tweetData.screenName}</small>
                </span>
                    </h5>
                    <div>
                        <p>{ tweetData.fullText }</p>
                        <div>
                            <div className="d-inline-block mr-3 text-muted">
                                <HeartIcon size={16} />{` ${tweetData.favoriteCount} `}
                            </div>
                            <div className="d-inline-block mr-3 text-muted">
                                <ArrowSwitchIcon size={16} />{` ${tweetData.retweetCount} `}
                            </div>
                        </div>
                    </div>
                </Media.Body>
            </Media>
        </div>
    );
};