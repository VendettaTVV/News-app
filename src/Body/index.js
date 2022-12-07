
import { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import NewsCard from './NewsCard';
import Button from 'react-bootstrap/Button';
import FormComponent from './Form';
import { setErrorMessage, setSearchParams, setTotalResults } from '../services/stateService'
import { getEverything, getEverythingDummy } from '../services/apiServices';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import './News.scss';


function BodyComponent() {
    const [show, setShow] = useState(false);
    const [articles, setArticles] = useState([]);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const { q, lang } = useParams();

    const defaultProps = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        if (lang && defaultProps.language !== lang) {
            dispatch(setSearchParams({
                ...defaultProps,
                language: lang,
            }));
            return;
        }
        (async function () {
            try {

                const response = await getEverything({
                    ...defaultProps,
                    q: q || defaultProps.q
                });
                const responseData = await response.json();
                if (responseData.status === 'error') {
                    throw responseData;
                }
                setArticles(responseData.articles);
                dispatch(setTotalResults(responseData.totalResults))
            } catch (error) {
                dispatch(setErrorMessage(error.message));
                const response = await getEverythingDummy();
                const responseData = await response.json();
                setArticles(responseData.articles);
            }

        })();
    }, [defaultProps, dispatch, q, lang]);

    return (
        <>
            <Button variant="outline-primary" onClick={handleShow} className="mb-3">
                Search
            </Button>
            <Link to="News-app/bitcoin">Bitcoin today</Link>
            <Row xs={1} md={2} lg={3} className="g-2">
                {articles.map((article, idx) => (
                    <Col key={idx}>
                        <NewsCard article={article} />
                    </Col>
                ))}
            </Row>
            <FormComponent
                show={show}
                handleClose={handleClose}
                setArticles={setArticles}
                searchProps={defaultProps}
                articles={articles}
            />
        </>
    );
}



export default BodyComponent;