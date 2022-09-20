import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import "./components/ItemListContainer.css";



function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={'Compra tus productos aqui!!!'}/>  
    </>



  );
}

export default App;
