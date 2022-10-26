import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import Item from "./Item";

function ItemDetail({product}) {
    const {addProduct}= useContext(CartContext);
    const [quantity,setQuantity]=useState(0);
    
    const onAdd = (count)=>{
        addProduct(product,count);
        setQuantity(count);
        
    }
    
    return ( 
    
        <div className="itemDetail">
            <Item prod = {product}/>
            <ItemCount initial={1} stock={product.stock} onAdd={onAdd}/>
            {
                quantity>0 &&
                <Link to='/cart'>
                    <button> Ir al carrito </button>
                </Link>
            }
        </div>
   
     );
}

export default ItemDetail;