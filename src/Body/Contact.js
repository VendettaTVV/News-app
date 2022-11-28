import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import CardFoto from '../CardFoto.jpg';

function ContantComponant() {
    return (
        <>
            <Link to="/contact/school" className="btn btn-secondary stretched-link">School Contacts</Link>
            <Card className="position-absolute top-50 start-50 translate-middle mt-1" style={{ width: '25rem' }}>
                <Card.Img variant="top" src={CardFoto} />
                <Card.Body>
                    <Card.Title className="text-center">Vitalii Tkachuk</Card.Title>
                    <Card.Text className="text-center">
                        I study in Gamma Intelligence OÜ courses to front-end developer!
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flushc text-center">
                    <ListGroup.Item>Phone: 56761111</ListGroup.Item>
                    <ListGroup.Item>Email: vv.......vv@gmail.com</ListGroup.Item>
                </ListGroup>
                <Card.Body className="text-center ">
                    <Card.Link href="https://github.com/VendettaTVV" className="btn btn-secondary stretched-link">My github link</Card.Link>
                </Card.Body>
            </Card>
        </>
    )
};

export default ContantComponant;