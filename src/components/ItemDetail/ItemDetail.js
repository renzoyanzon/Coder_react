import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import Item from "./Item";

function ItemDetail({product}) {

    const [quantity,setQuantity]=useState(0);
    
    const onAdd = (count)=>{
        setQuantity(count);
    }
    
    return ( 
    
    <div>
        <Item prod = {product}/>
        <ItemCount initial={1} stock= {5} onAdd={onAdd}/>
    </div>
   
     );
}

export default ItemDetail;