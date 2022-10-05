import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemList/ItemListContainer';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import Cart from './components/Cart';
import Checkout from './components/Checkout';



function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={ <ItemListContainer greeting={'Navegando juntos'}/>} />
        <Route path='/category/:categoryName' element={ <ItemListContainer greeting={'Navegando juntos'}/>} /> 
        <Route path='/item/:id' element={ <ItemDetailContainer/>} />
        <Route path='/cart' element={ <Cart/>} />
        <Route path='/checkout' element={<Checkout/>} />
          
      </Routes>
      
    </BrowserRouter>



  );
}

export default App;
