
import { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import NewsCard from './NewsCard';
import Button from 'react-bootstrap/Button';
import FormComponent from './Form';
import { setErrorMessage, setSearchParams, setTotalResults } from '../Services/stateService'
import { getEverything } from '../Services/apiServices';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import './News.scss';


function NewsGroupComponent() {
    const [show, setShow] = useState(false);
    const [articles, setArticles] = useState([]);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const { q, lang } = useParams();
    // useDispatch it's a hook react-redux and thanks to him we can interact with react-redux
    // useDispatch is the bridge between dispatch i redux

    // useSelector it's react-redux hook, who watches over redux state and, if there are changes, starts rendering
    const defaultProps = useSelector(state => state);
    const dispatch = useDispatch();

    // useEffect it's a hook, which runs after the first render of the component has occurred
    // useEffect takes 2 parameters: 1. Function to run  2. An array of variables on which further work will depend useEffect
    // All the introduced variables that we use must be in the dependency array
    // Any change in dependency useEffect run
    // If the changes in the component do not affect dependencies useEffect no run but component render
    // Therefore, it is better to work with requests

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
                // Redux action must be wrapped in dispatch
                dispatch(setTotalResults(responseData.totalResults))
            } catch (error) {
                dispatch(setErrorMessage(error.message));
            }

        })();
    }, [defaultProps, dispatch, q, lang]);

    return (
        <>
            <Button variant="outline-primary" onClick={handleShow} className="mb-3">
                Search
            </Button>
            <Link to="/bitcoin">Bitcoin today</Link>
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
            />
        </>
    );
}



export default NewsGroupComponent;