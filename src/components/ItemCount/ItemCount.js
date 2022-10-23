import { useState } from "react";
import './ItemCount.css'

function ItemCount({stock,initial,onAdd}) {
    
    const [count, setCount]=useState(initial);
    

    //definimos una funcion que disminuya el valor de count
    const decrementar =()=>{
        if(count>1){
            setCount(count - 1)
        }
    }
    
    const incrementar = ()=>{
        if(count<stock){
            setCount(count + 1)
        }
    }
    
    return ( 

        <div className="itemCount">
            <div className="itemCountStock">
                <p> Stock disponible : {stock} </p>
            </div>
            <div className="itemCountCalc">
                <button disabled={stock===0} onClick={incrementar}> + </button>
                <p> {count} </p>
                <button disabled={stock===0} onClick={decrementar}> - </button>
            </div>
            <div className="itemCountButton">
                <button className="itemCountCarrito" disabled={stock===0} onClick={()=>{onAdd(count)}}> Agregar al carrito </button>
            </div>
        </div>

     );
}

export default ItemCount;