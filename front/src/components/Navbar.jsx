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

const NavBar = ({ handlerChange, handlerSubmitSearch, userLogout, user }) => (
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
            <Navbar.Brand className="navbar-links">
              {" "}
              Hola {user.firstName}!
            </Navbar.Brand>
            <Link onClick={userLogout} className="navbar-links" to="/products">
              Logout
            </Link>
          </div>
        ) : (
          <Link className="navbar-links" to="/users/login">
            Ingresar
          </Link>
        )}
        <NavDropdown title="Categorías" id="navbar-dropdown">
          <NavDropdown.Item href="#action/3.1">Juegos</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Play Station 4</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Xbox</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">Consolas</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.5">Audio</NavDropdown.Item>
        </NavDropdown>

        <Link className="navbar-links" to="/cart">
          <FaShoppingCart className="shoppingCart-icon" />
        </Link>
      </Nav>
      <Form onSubmit={handlerSubmitSearch} inline>
        <FormControl
          onChange={handlerChange}
          type="text"
          placeholder="Search"
          className="mr-sm-2"
        />
        <button type="submit" className="search-button">
          <FaSearch />
        </button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar;
