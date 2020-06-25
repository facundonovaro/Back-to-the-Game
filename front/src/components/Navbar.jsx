import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import logo from '../assets/logo.png' ;
import { FaShoppingCart, FaSearch } from "react-icons/fa"

const NavBar = ({ handlerChange, handlerSubmit, userLogout, user }) => (

<Navbar bg="dark" expand="lg" className='navbar-container'>
  <Link to='/products'>
    <Navbar.Brand>
      <img
        src={logo}
        width="100"
        height="100"
        className="d-inline-block align-top"
      /></Navbar.Brand>
  </Link>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />

  <Navbar.Collapse>
    <Nav className="mr-auto">
      
      {user.id ? null : <Nav.Link className="navbar-links"><Link to='/users/register' className="navbar-links">Register</Link></Nav.Link>}
      
      {user.id ? <div style={{display: 'flex'}}>
      <Navbar.Brand className="navbar-links"> Welcome {user.firstName}</Navbar.Brand> 
      <Nav.Link onClick={userLogout} className="navbar-links"><Link to='/products' className="navbar-links">Logout</Link></Nav.Link>
      </div> :
      <Nav.Link className="navbar-links"><Link to='/users/login' className="navbar-links">Login</Link></Nav.Link>
      }
      <NavDropdown title="Categorías" id="navbar-dropdown">
        <NavDropdown.Item href="#action/3.1">Games</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Play Station 4</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Xbox</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">Consoles</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.5">Audio</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link className="navbar-links"><Link to='/cart'className="navbar-links"><FaShoppingCart/></Link></Nav.Link>
    </Nav>
    <Form inline onSubmit={handlerSubmit}>
      <FormControl onChange={handlerChange} type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success"><FaSearch/></Button>
    </Form>
  </Navbar.Collapse>
</Navbar>

);

export default NavBar;
