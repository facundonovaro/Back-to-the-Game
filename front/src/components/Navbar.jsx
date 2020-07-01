import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import logo from "../assets/logo.png";
import { FaShoppingCart, FaSearch } from "react-icons/fa";

const NavBar = ({
  handlerChange,
  handlerSubmitSearch,
  userLogout,
  user,
  disable,
  inputValue,
}) => (
    <Navbar bg="dark" expand="lg" className="navbar-container">
      <Link to="/products">
        <Navbar.Brand>
          <img
            src={logo}
            width="100"
            height="100"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="mr-auto">
          {user.id ? null : (
            <Link className="navbar-links" to="/users/register">
              Registrarse
            </Link>
          )}
          {user.id ? (
            <div style={{ display: "flex" }}>
              <Link to='/products' className="navbar-links">
                {" "}
              Hola {user.firstName}!
            </Link>
              <Link onClick={userLogout} className="navbar-links" to="/products">
                Cerrar Sesión
            </Link>
            </div>
          ) : (
              <Link className="navbar-links" to="/users/login">
                Iniciar Sesión
              </Link>
            )}
          <NavDropdown title="Categorías" id="navbar-dropdown">
            <Link to='/category/Juegos' className='dropdown-links'>Juegos</Link>
            <Link to='/category/Play Station 4' className='dropdown-links'>Play Station 4</Link>
            <Link to='/category/Xbox' className='dropdown-links'>Xbox</Link>
            <Link to='/category/Consolas' className='dropdown-links'>Consolas</Link>
            <Link to='/category/Audio' className='dropdown-links'>Audio</Link>
          </NavDropdown>

        <Link className="navbar-links" to="/cart">
          <FaShoppingCart className="shoppingCart-icon" />
        </Link>
        <Link to="/checkout">
          <Button id="checkoutCart" variant="dark">
            {" "}
                  Ordenes
                </Button>
        </Link>
      </Nav>
      <Form onSubmit={handlerSubmitSearch} inline>
        <FormControl
          onChange={handlerChange}
          type="text"
          placeholder="Quiero buscar..."
          className="mr-sm-2"
        />
        <button disabled={disable} type="submit" className="search-button">
          <FaSearch />
        </button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar;
