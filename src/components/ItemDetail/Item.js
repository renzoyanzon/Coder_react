import {Card, Container } from "react-bootstrap";


function Item({prod}) {
    return (  
        <Container className="item">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={prod.picturerurl} />
                <Card.Body>
                    <Card.Title>{prod.name}</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Item;