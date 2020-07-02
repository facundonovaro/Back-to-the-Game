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
  categories,
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
            <Link to="/products" className="navbar-links">
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
          {categories &&
            categories.map((category) => (
              <Link
                key={category.id}
                to={`/category/${category.name}`}
                className="dropdown-links"
              >
                {category.name}
              </Link>
            ))}
        </NavDropdown>
        <Link className="navbar-links" to="/cart">
          <FaShoppingCart className="shoppingCart-icon" />
        </Link>
        {user.id ? (
          <Link className="navbar-links" to="/lastorders">
            Ordenes
          </Link>
        ) : null}
        {user.id && user.role !== "user" ? (
          <Link className="navbar-links" to="/admin">
            Admin
          </Link>
        ) : null}
      </Nav>
      <Form onSubmit={handlerSubmitSearch} inline>
        <FormControl
          onChange={handlerChange}
          type="text"
          placeholder="Quiero buscar..."
          className="mr-sm-2"
          value={inputValue}
        />
        <button disabled={disable} type="submit" className="search-button">
          <FaSearch />
        </button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar;
