
import { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import NewsCard from './NewsCard';
import Button from 'react-bootstrap/Button';
import FormComponent from './Form';
import {setErrorMessage, setTotalResult} from '../Services/stateService'
import { getEverything } from '../Services/apiServices';
import {useDispatch, useSelector} from 'react-redux';
import './News.scss';


function NewsGroupComponent() {
    const [show, setShow] = useState(false);
    const [articles, setArticles] = useState([]);
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const defaultProps = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        (async function () {
            try {
                const response = await getEverything(defaultProps);
            const responseData = await response.json();
            if(responseData.status === 'error') {
                throw responseData;
            }
            setArticles(responseData.articles);
            dispatch(setTotalResult(responseData.totalResult))
            } catch(error){
                dispatch(setErrorMessage(error.message));
            }
            
        })();
    }, [defaultProps, dispatch]);

    return (
        <>
            <Button variant="outline-primary" onClick={handleShow} className="mb-3">
                Search
            </Button>
            <Row xs={1} md={2} lg={3} className="g-3">
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
            />
        </>
    );
}



export default NewsGroupComponent;