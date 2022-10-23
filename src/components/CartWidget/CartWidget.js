
import { FaOpencart } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const CartWidget = () => {
    
  
    return (
       <>
       <Link to='/Cart'>
          <FaOpencart />
      
       </Link>
        
       </> 
     );
}
 
export default CartWidget ;