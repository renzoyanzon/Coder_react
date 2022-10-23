import { FaOpencart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


const CartWidget = () => {
    
   const {getTotalProducts,productCartList}=useContext(CartContext);
    return (
      <>
      {
        productCartList.length > 0 ?
          <>
            <Link to='/cart' >
              <FaOpencart/>
            </Link>
            <span className="containerQty"> {getTotalProducts()} </span>
          </>
          :
          <Link to='/cart' >
          <FaOpencart/>
           </Link>
      }

    </>
     );
}
 
export default CartWidget ;