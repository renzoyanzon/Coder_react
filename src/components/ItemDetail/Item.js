import {Card, Container } from "react-bootstrap";


function Item({prod}) {
    return (  
        <Container className="item">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={prod.picturerurl} />
                <Card.Body>
                    <Card.Title>{prod.name}</Card.Title>
                    <Card.Text>
                    {`Stock: ${prod.stock}`}
                    </Card.Text>
                    <Card.Text>
                    {prod.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Item;