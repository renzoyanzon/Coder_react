import Items from "./Items";
import "./ItemList.css";


function ItemList({products = {}}) {
    return ( 
    <div className="itemList">
        {products.map((el)=>(
        <Items key={el.id} prod = {el}/>
       ))} 

    </div>
      
     );
}

export default ItemList;