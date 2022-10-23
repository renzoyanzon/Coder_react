import { createContext, useState } from "react";


export const CartContext= createContext();

export const CartProvider = ({children})=>{
    const [productCartList,setProductCartList]= useState([]);
    
    const addProduct=(product,count)=>{
    //Verifico si el producto existe en el arreglo

    // Si existe, actualiza las cantidades del producto
        if(isInCart(product.id)){
            const newList=[...productCartList];
            const productIndex= productCartList.findIndex((el)=>el.id ===product.id);
            newList[productIndex].quantity = newList[productIndex].quantity + count;

            setProductCartList(newList);

        // Si no existe, agrega el producto     
        } else{
            const newProduct = {...product, quantity:count};
            const newList = [...productCartList, newProduct];
            setProductCartList(newList)
        }   
    }


    const isInCart = (idProduct)=>{
        const existElement = productCartList.some((el)=> el.id===idProduct);
        return existElement
    }


    const deleteProduct = (idProduct)=>{
        const copyArray = [...productCartList];
        const newArray = copyArray.filter((el)=>el.id !== idProduct)
        setProductCartList(newArray)
      }
  
      const deleteAllProducts = ()=>{
        setProductCartList([])
      }
  

    return(

        <CartContext.Provider value={{productCartList,addProduct,isInCart,deleteProduct,deleteAllProducts}}>
            {children}
        </CartContext.Provider>


    )
}