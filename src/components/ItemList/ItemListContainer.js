import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import {useParams} from 'react-router-dom';
import { getAllProducts, getProductsByCategory } from '../../utils/products';
import ItemList from './ItemList';
import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {

    const {categoryName} = useParams();
    const [productos,setProductos]= useState([]);

    useEffect(() => {
      if(categoryName){
        getProductsByCategory(categoryName)
          .then((data)=> setProductos(data))
          .catch((error)=>console.warn(error))

      } else{
        getAllProducts()
          .then((data)=> setProductos(data))
          .catch((error)=> console.warn(error))
      }
    },[categoryName]);

    console.log(productos)

    return ( 
      <Container>
        <h3> {greeting}</h3>
        <ItemList products={productos}/>

      </Container>
     );
}
 
export default ItemListContainer;