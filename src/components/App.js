import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { AlertIcon } from "@primer/octicons-react";

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import TweetList from "./TweetList";
import { fetchTweets } from "../actions";

const App = ({ tweets, fetchTweets }) => {

    return (
        <Container>
            <Row className="mt-5 text-center">
                <Col>
                    <h1>2016 Twitter</h1>
                </Col>
            </Row>
            <Row className="my-4 text-center text-muted">
                <Col>
                    <AlertIcon size={24} />
                </Col>
            </Row>
            <Row className="mx-5 mb-5 text-center">
                <Col>
                    <div>
                        <Link to='/HillaryClinton' onClick={() => fetchTweets('HillaryClinton')} >
                            <Button variant="outline-dark" className="mr-3 rounded-0">Hillary Clinton</Button>
                        </Link>
                        <Link to='/realDonalTrump' onClick={() => fetchTweets('realDonaldTrump')} >
                            <Button variant="outline-dark" className="rounded-0">Donald Trump</Button>
                        </Link>
                    </div>
                </Col>
            </Row>
            <Row className="mx-5">
                <Col>
                    <TweetList tweets={tweets} />
                </Col>
            </Row>
        </Container>
    );

}

function mapStateToProps(state) {
    return {
        tweets: state.tweets
    };
}

export default connect(mapStateToProps, {
    fetchTweets: fetchTweets
})(App);