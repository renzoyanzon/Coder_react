import Item from "./Item";
import "./ItemList.css";


function ItemList({products}) {
    return ( 
    <div className="itemList">
        {products.map((el)=>(
        <Item key={el.id} prod = {el}/>
       ))} 

    </div>
      
     );
}

export default ItemList;