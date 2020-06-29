import React from "react";
import { Link } from "react-router-dom";
import { Card, ListGroupItem, ListGroup, Button } from "react-bootstrap";

const Products = ({ products, handlerSubmitCart, userId }) => {
  return (
    <div className="containerProd textProductsForce">
      {products.map((product) => (
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
              <Card.Title className="titleCard">{product.name}</Card.Title>
              <Card.Text className="descrCard">
                {`Descriptión: ${product.description}`}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>{`Price: ${product.price}`}</ListGroupItem>
              <ListGroupItem>{`Stock: ${product.stock}`}</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Button
                className="btn btn-dark"
                variant="primary"
                onClick={() => {
                  handlerSubmitCart(product.id, userId, product.price);
                }}
              >
                Comprar
              </Button>{" "}
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Products;
