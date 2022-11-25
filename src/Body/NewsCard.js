import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import noImage from '../dummy-post-horisontal.jpg';
import NewsModal from './NewsModal';
import moment from 'moment';


function NewsCard({article}) {
    // useState eto funkcia/hook kot pomogaet rabotat s sostoyaniem componenta
    // Sostoyanie eto informaciia, kotoruju component sodergit v sebe
    // Sostoyanie, kak i lubye dannye mogut menjatsa, pri izmenenii sostoyanija zapuskaetsa novaja otrisovka componenta
    // U kagdogo sostojanija est svojo izna4alnoe zna4enie i funkcia, kotoaja menajet eto na4alnoe zna4enie
    // useState prinimaet kak argument izna4alnoe zna4enie sostojaniz i vydaet massiv s 2 zna4enijami: 1 izna4alnoe sostojanie! 2: funkciu dlya izmenenija sostojania 
    const [show, setShow] = useState(false);
    
    // Card component eto komponent iz npm Paceta React-bootstrap
    // React-bootstrap eto biblioteka s gotovymi react komponentami napisany s ispolzovaniem bootstrap front-end instrumetami CSS toolkit
    return (
        <>
            <Card onClick={() => setShow(true)}>
                <Card.Img variant="top" src={article.urlToImage || noImage} />
                <Card.Body>
                    <Card.Title>{article.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{article.source.name}</Card.Subtitle>
                    <Card.Text dangerouslySetInnerHTML={{ __html: article.discription }}>
                    </Card.Text>
                    {article.author? (
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
            <NewsModal show={show} setShow={setShow} article={article}/>
        </>
    )
}

export default NewsCard;