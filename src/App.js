import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemList/ItemListContainer';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import Cart from './components/Cart/CartContainer';
import { CartProvider } from './context/CartContext';


function App() {

  return (
    <CartProvider basename='/Coder_react'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={ <ItemListContainer greeting={'Navegando juntos'}/>} />
          <Route path='/category/:categoryName' element={ <ItemListContainer greeting={'Navegando juntos'}/>} /> 
          <Route path='/item/:id' element={ <ItemDetailContainer/>} />
          <Route path='/cart' element={ <Cart/>} />         
        </Routes>  
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
