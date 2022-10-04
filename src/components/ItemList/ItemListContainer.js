import "./ItemListContainer.css";

const ItemListContainer = ({greeting}) => {
    return ( 
      <div className="itemContenido">
        <h1> Equipos y Accesorios</h1>
        <p> {greeting}</p>
      </div>  
          
       
       
     );
}
 
export default ItemListContainer;