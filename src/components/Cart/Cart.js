import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import { CartContext } from '../../context/CartContext';

function Cart () {
    
    const {productCartList,deleteProduct,deleteAllProducts}= useContext(CartContext)
    
    return ( 
    <Container> 
        <h1> Carrito de compras</h1>
        {
            productCartList.map((el)=>(
                <>
                    <li key={el.id}>{el.name}</li>
                    <button  onClick={()=>deleteProduct(el.id)} > Eliminar </button>
                </>
                
            ))

        }
        <button onClick={deleteAllProducts}> Limpiar </button>
    </Container>
     );
}

export default Cart ;