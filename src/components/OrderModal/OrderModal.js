import { Alert, Button, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import  './OrderModal.css';

function OrderModal ({showModal,onClose,onBuy,orderId}) {
    
    
    return ( 
        <Modal show={showModal} onHide={onClose}>
            <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Ingrese email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Ingrese nombre" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Telefono</Form.Label>
                <Form.Control type="tel" placeholder="Ingrese telefono" />
            </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                { !orderId &&(
                <>
                    <Button variant="secondary" onClick={onClose}>
                    Cancelar
                    </Button>
                    <Button variant="primary" onClick={onBuy}>
                    Comprar
                    </Button>
                </>
                )}
                { orderId && (
                <div className="orderIdAlert"> 
                    <Alert key='success' variant='success'>
                        {`Id compra:  ${orderId}`}
                    </Alert>
                    <Link to='/'>
                        <Button variant="primary">
                            Seguir comprando
                        </Button>
                    </Link>
              
                </div>
                )}

            </Modal.Footer>
        </Modal>


     );
}

export default OrderModal ;




