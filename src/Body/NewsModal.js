
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import noImage from '../dummy-post-horisontal.jpg';
import Figure from 'react-bootstrap/Figure';

function NewsModal({setShow, show, article}) {

    const handleClose = () => setShow(false);

    return (
        <>

            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{article.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Figure>
                        <Figure.Image

                            alt=""
                            src={article.urlToImage || noImage}
                        />
                    </Figure>
                    <p>{article.content}</p>
                    <Button variant="outline-secondary" className="w-100" href={article.url} target="_blank">Read from source</Button>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default NewsModal;