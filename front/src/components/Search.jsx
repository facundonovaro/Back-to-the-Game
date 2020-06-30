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
      {searchedList.map((productSearched) => (
        <div key={productSearched.id} className="cards">
          <Card style={{ width: "18rem" }}>
            <Link to={`/products/${productSearched.id}`}>
              <img
                src={productSearched.img1Url}
                className="card-img-top"
                className="imgProd"
              />
            </Link>
            <Card.Body>
              <Card.Title className="titleCard">
                {productSearched.name}
              </Card.Title>
              <Card.Text className="descrCard">
                {`Descriptión: ${productSearched.description}`}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>{`Price: ${productSearched.price}`}</ListGroupItem>
              <ListGroupItem>{`Stock: ${productSearched.stock}`}</ListGroupItem>
            </ListGroup>
            <Card.Body>
              {cart.includes(product.id) ? (
                <Button
                  variant="primary"
                  onClick={() => {
                    handleDeleteCart(productSearched.id);
                  }}
                >
                  Remove from Cart
                </Button>
              ) : (
                <Button
                  variant="primary"
                  onClick={() => {
                    handlerSubmitCart(
                      productSearched.id,
                      productSearched.price
                    );
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
