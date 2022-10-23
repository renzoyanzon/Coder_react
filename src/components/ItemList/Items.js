import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Items.css'

function Item ({prod}) {
    return ( 
    <>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={prod.picturerurl} />
            <Card.Body>
                <Card.Title>{prod.name}</Card.Title>
                <Card.Text>
                    $ {prod.price}
                </Card.Text>
                <Card.Text>
                    {prod.marca}
                </Card.Text>
                <Link to={`/item/${prod.id}`}>
                    <Button variant="primary">
                    Mas info
                    </Button>
                </Link>
    
            </Card.Body>
        </Card>
    </>
     );
}

export default Item ;