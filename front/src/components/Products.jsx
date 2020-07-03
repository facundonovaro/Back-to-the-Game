import React from "react";
import { Link } from "react-router-dom";
import { Card, ListGroupItem, ListGroup, Button } from "react-bootstrap";

const Products = ({ products, handlerSubmitCart, handleDeleteCart, cart }) => {
  return (
    
<div>
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
              <Card.Title className="titleCard">{product.snippet}</Card.Title>
              <Card.Text className="descrCard">
                {` ${product.snippetDesc}`}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>{`Precio: $ ${product.price}`}</ListGroupItem>
              {product.stock >= 1 ? (null) :
                (<Button disabled variant="danger"> Sin Stock</Button>)
              }
            </ListGroup>
            <Card.Body>
              {product.stock >= 1 ? (

                cart.includes(product.id) ? (

                  <Button
                    variant="secondary"
                    onClick={() => {
                      handleDeleteCart(product.id)
                    }}
                  >
                    Remover del Carrito
                  </Button>
                ) : (
                    <Button
                      variant="dark"
                      onClick={() => {
                        handlerSubmitCart(product.id, product.name, product.description, product.price, product.stock, product.img1Url, product.img2Url);
                      }}
                    >
                      Añadir al Carrito
                    </Button>
                  )
              ) : null}

            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Products;
