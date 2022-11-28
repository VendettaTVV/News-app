import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import noImage from '../dummy-post-horisontal.jpg';
import NewsModal from './NewsModal';
import moment from 'moment';


function NewsCard({ article }) {
    // useState it's a func/hook which helps to work with component state
    // State is the information that a component contains within itself.
    // The state, like any data, can change, when the state changes, a new rendering of the component is started
    // Each state has its own initial value and a function that changes its initial value.
    // useState takes as an argument the initial value of the state and returns an array with 2 values: 1. The initial state 2. a function to change the state
    const [show, setShow] = useState(false);

    // Card component it's a component from npm package React-bootstrap
    // React-bootstrap this is a library with ready-made react components written using bootstrap front-end tools CSS toolkit
    return (
        <>
            <Card onClick={() => setShow(true)}>
                <Card.Img variant="top" src={article.urlToImage || noImage} />
                <Card.Body>
                    <Card.Title>{article.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{article.source.name}</Card.Subtitle>
                    <Card.Text dangerouslySetInnerHTML={{ __html: article.discription }}>
                    </Card.Text>
                    {article.author ? (
                        <blockquote className="blockquote mb-0">
                            <footer className="blockquote-footer">
                                <cite title="Source Author">{article.author}</cite>
                            </footer>
                        </blockquote>
                    ) : ''}

                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{moment(article.publishedAd).format('DD.MM.YYYY')}</small>
                </Card.Footer>
            </Card>
            <NewsModal show={show} setShow={setShow} article={article} />
        </>
    )
}

export default NewsCard;