import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class App extends React.Component {

    render() {

        const handleClick = (username) => {
            // this.props.fetchTweets(username);
            console.log('button clicked, username is: ', username);
        }

        return (
            <Container>
                <Row className="my-5 text-center">
                    <Col>
                        <h1>2016 Twitter</h1>
                    </Col>
                </Row>
                <Row className="mb-5 text-center">
                    <Col>
                        <div>
                            <Link to='/HillaryClinton' onClick={() => handleClick('HillaryClinton')} >
                                <Button variant="outline-dark" className="mr-3 rounded-0">Hillary Clinton</Button>
                            </Link>
                            <Link to='/realDonalTrump' onClick={() => handleClick('realDonaldTrump')} >
                                <Button variant="outline-dark" className="rounded-0">Donald Trump</Button>
                            </Link>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {/*<TweetList user={this.props.user} tweets={this.props.tweets} />*/}
                        TweetList placeholder
                    </Col>
                </Row>
            </Container>
        );
    }

}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
