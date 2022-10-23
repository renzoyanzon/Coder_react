import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../utils/products';
import ItemDetail from './ItemDetail';
import './Item.css';

function ItemDetailContainer () {
    const[producto,setProducto]= useState()
    
    const {id} = useParams ();
   
    useEffect(()=>{
        getProduct(id)
            .then((data)=> setProducto(data))
            .catch(error => console.warn(error))
    },[id])
    
    
    return ( 
        <Container className="itemDetailContainer">
            <h3> Detalle del producto</h3>
            {producto &&  <ItemDetail product={producto}/>}
           
        </Container>
        
     );
}

export default ItemDetailContainer ;