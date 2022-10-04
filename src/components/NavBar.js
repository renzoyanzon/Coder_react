import{Container,Navbar,Nav} from "react-bootstrap";
import CartWidget from "./CartWidget/CartWidget";
import './CartWidget/CartWidget.css';

const NavBar = ()=>{
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">
               Hijos del viento  
            </Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Windsurf</Nav.Link>
                <Nav.Link href="#pricing">Kitesurf</Nav.Link>
                <Nav.Link href="#pricing">Standup</Nav.Link>
                <Nav.Link href="#pricing">Contacto</Nav.Link>
            </Nav>
            <CartWidget/>
            </Container>
        </Navbar>
    )
}

export default NavBar;