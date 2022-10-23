import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import { CartContext } from '../../context/CartContext';

function Cart ({item}) {
    
    const {deleteProduct} = useContext(CartContext);

    return ( 

        <Container> 
                <p>{`Producto: ${item.name}`}</p>
                <hr/>
                <span > {`Precio unitario: USD ${item.price}`} </span>
                <hr/>
                <p> {`Cantidad: ${item.quantity}`}</p>
                <hr/>
                <p> {`Total:  USD ${item.totalPrice}`}</p>
                <hr/>
                <button  onClick={()=>deleteProduct(item.id)} > Eliminar </button>
        </Container>
     );
}

export default Cart ;