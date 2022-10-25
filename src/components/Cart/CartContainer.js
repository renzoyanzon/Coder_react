import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom';
import Cart from './Cart';
import { createOrder } from "../../utils/orders";
import OrderModal from "../OrderModal/OrderModal";

const buyerMock = {
    name: 'renzo',
    phone: '123213213',
    email: 'renzo@mail.com'
}


function CartContainer() {
    
    const {productCartList,deleteAllProducts,sumAllPrice} = useContext(CartContext);
    
    const [showModal, setShowModal] = useState(false);
    const handleShow =()=> setShowModal(true);
    const handleClose = ()=> setShowModal(false);

    const [orderId,setOrderId] =useState();

    const handleBuy = async () =>{
        const newOrder = {
            buyer:buyerMock,
            items: productCartList,
            total: sumAllPrice()
        }
        const newOrderId = await createOrder(newOrder);
        setOrderId(newOrderId);
        deleteAllProducts();
       
    }

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
                        <button onClick={handleShow}> Finalizar compra </button>
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

                <OrderModal 
                    showModal={showModal} 
                    onClose={handleClose} 
                    onBuy={handleBuy}
                    orderId = {orderId}  
                />







            </div>
        </div>   


     );
}

export default CartContainer;