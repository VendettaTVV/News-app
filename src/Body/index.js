
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import NewsCard from './NewsCard';
import './News.scss';
import Button from 'react-bootstrap/Button';
import FormComponent from './Form';

function NewsGroupComponent() {
    const [show, setShow] = useState(false);
    const [formResponse, setFormResponse] = useState(null);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>
            <Button variant="outline-primary" onClick={handleShow} className="mb-3">
                Search
            </Button>
            <Row xs={1} md={2} lg={3} className="g-3">
                {formResponse?.articles.map((article, idx) => (
                    <Col key={idx}>
                        <NewsCard article={article} />
                    </Col>
                ))}
            </Row>
            <FormComponent show={show} handleClose={handleClose} setFormResponse={setFormResponse}/>
        </>
    );
}

export default NewsGroupComponent;