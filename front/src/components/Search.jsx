import React from "react";
import { Link } from "react-router-dom";
import { Card, ListGroupItem, ListGroup, Button } from "react-bootstrap";

const Search = ({
  searchedList,
  handlerSubmitCart,
  handleDeleteCart,
  cart,
}) => {
  return (
    <div className="containerProd">
      {searchedList.map((product) => (
        <div key={product.id} className="cards">
          <Card style={{ width: "18rem" }}>
            <Link to={`/products/${product.id}`}>
              <img
                src={product.img1Url}
                className="card-img-top"
                className="imgProd"
              />
            </Link>
            <Card.Body>
              <Card.Title className="titleCard">
                {product.name}
              </Card.Title>
              <Card.Text className="descrCard">
                {`Descriptión: ${product.description}`}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>{`Price: ${product.price}`}</ListGroupItem>
              <ListGroupItem>{`Stock: ${product.stock}`}</ListGroupItem>
            </ListGroup>
            <Card.Body>
              {cart.includes(product.id) ? (
                <Button
                  variant="primary"
                  onClick={() => {
                    handleDeleteCart(product.id)
                  }}
                >
                  Remove from Cart
                </Button>
              ) : (
                <Button
                  variant="primary"
                  onClick={() => {
                    handlerSubmitCart(product.id, product.name, product.description, product.price, product.stock, product.img1Url, product.img2Url);
                  }}
                >
                  Agregar al carrito
                </Button>
              )}
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Search;
