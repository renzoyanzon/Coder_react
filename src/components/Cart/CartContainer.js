import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom';
import Cart from './Cart';


function CartContainer() {
    
    const {productCartList,deleteAllProducts,sumAllPrice} = useContext(CartContext)
    
    return (

        <div> 
            <div>
                {
                    productCartList.length>0 ?
                    <>
                        {
                            productCartList.map((el)=>(
                                <Cart key={el.id} item={el}/>
                            ))
                            
                        }
                        <hr/>
                        <h5> {`Total compra: USD ${sumAllPrice()}`}</h5>
                        <hr/>
                        <button onClick={deleteAllProducts}> Limpiar </button>
                    </>
                    :
                    <>
                        <h4> No existen productos seleccionados</h4>
                        <Link to='/'>
                            <button> Ver todos los productos</button> 
                        </Link>
                    </>
                    

                }
            </div>
        </div>   


     );
}

export default CartContainer;