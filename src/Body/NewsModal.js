
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import noImage from '../dummy-post-horisontal.jpg';
import Figure from 'react-bootstrap/Figure';


// Kak i lubaja funkcija v JS tak i componenty prinemaut props (properties)
// component mojet prinjat bezkonechnoe koli4estvo props, no hranit  ih v odnoi peremennoi tipe - ojekt
// Props peredautsja v component tak ge kak v HTML peredautsja atributy
//<Component prop1={1} prop2={2}
// V componente props ne mogut menjatsa

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