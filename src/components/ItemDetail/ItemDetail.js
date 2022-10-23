import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import Item from "./Item";

function ItemDetail({product}) {
    const {addProduct}= useContext(CartContext);
    //const [quantity,setQuantity]=useState(0);
    
    const onAdd = (count)=>{
        addProduct(product,count);
        
        
    }
    
    return ( 
    
    <div>
        <Item prod = {product}/>
        <ItemCount initial={1} stock= {10} onAdd={onAdd}/>
    </div>
   
     );
}

export default ItemDetail;