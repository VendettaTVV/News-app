
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
    // useDispatch eto hook react-redux i blagodarja emy my mogem vzaimodeistvovat s react-redux
    //useDispatch eto most megdu dispatch i redux

// useSelector eto react-redux hook, kotoryi sledit za redux sostoyaniem i pri nali4ii izmenenii zapuskaet otrisovku
    const defaultProps = useSelector(state => state);
    const dispatch = useDispatch();

    // useEffect eto hook, kotoryi zapuskaetsja posle togo kak prvyi render/otrisovka componenta proizoshla
    // useEffect prinimaet 2 parametra: 1 funkciu, kotoruu nugno zapustiti! 2. massiv iz peremennyh ot kotoryhbudet zaviset dalneishaja rabota useEffect
    // vse vnesennye peremennya, kotorye my ispolzuem dolgny byt v massive zavisimostei
    // pri lubyh izmenen zavisim useEffect zapuskaetsa
    // pri izmenenii v komponente ne kasaushihsja zavisimostei iseEffect ne zapuskaut no component renderitsya
    //Poetomu s nim lu4he rabotat s zaprosami

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
                // Redux destvie neohodimo obernut v dispatch
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