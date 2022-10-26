import{Container,Navbar,Nav} from "react-bootstrap";
import CartWidget from "../CartWidget/CartWidget";
import '../CartWidget/CartWidget.css';
import {Link} from "react-router-dom";
import "./NavBar.css";

const NavBar = ()=>{
    return(
        <Navbar className="navbar" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand as={Link} to='./'>
               Hijos del viento  
            </Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link as={Link} to='./' >Home</Nav.Link>
                <Nav.Link as={Link} to='/category/Windsurf' >Windsurf</Nav.Link>
                <Nav.Link as={Link} to='/category/Kitesurf'>Kitesurf</Nav.Link>
                
            </Nav>
            <CartWidget/>
            </Container>
        </Navbar>
    )
}

export default NavBar;