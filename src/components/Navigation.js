import { Navbar, Nav, Container, NavbarBrand,NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
//import '../components/navigation.css'


const Navigation = () => {
 return (
 <>
 <Navbar bg="light" expand="lg">
  <Container>
  <Navbar.Brand  ><Link  to="/" ><img src="logoo.png" style={{width:"120px"}}></img></Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <Nav.Link ><Link style={{ color:"inherit", textDecoration:"inherit"}}  to="/AboutUs" >AboutUs</Link></Nav.Link>
        <Nav.Link ><Link style={{ color:"inherit", textDecoration:"inherit"}}  to="/login" >Signin</Link></Nav.Link> 
        <Nav.Link ><Link style={{color:"inherit", textDecoration:"inherit"}} to="/register" >Signup</Link></Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
 
 </>
 );
}
export default Navigation;