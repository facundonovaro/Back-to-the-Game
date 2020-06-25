import React from "react";
import { Alert, ListGroup, Button } from "react-bootstrap";

const Cart = ({ deleteCart, updateCart, cart, user, totalQuantity }) => {
  return (
    <div>
      <h1>Tu Carrito</h1>
      {cart &&
        cart.map((product) => (
          <div key={product.id}>
            <ListGroup>
              <ListGroup.Item>{product.product.name}</ListGroup.Item>
              <ListGroup.Item>
                Precio individual - ${product.product.price}
              </ListGroup.Item>
              <ListGroup.Item>
                Sub Total - ${product.quantity * product.product.price}
              </ListGroup.Item>
              <ListGroup.Item>{product.quantity}</ListGroup.Item>
            </ListGroup>
            <Button
              variant="dark"
              onClick={() => {
                updateCart({
                  quantity: product.quantity + 1,
                  orderId: product.id,
                  userId: user.id,
                });
              }}
              disabled={product.quantity >= product.product.stock}
            >
              + 1
            </Button>
            {product.quantity >= product.product.stock ? (
              <Alert variant="primary">Llegaste al máximo stock</Alert>
            ) : null}

            <Button
              variant="dark"
              onClick={() => {
                updateCart({
                  quantity: product.quantity - 1,
                  orderId: product.id,
                  userId: user.id,
                });
              }}
              disabled={product.quantity <= 1}
            >
              - 1
            </Button>
            {product.quantity <= 1 ? (
              <Alert variant="primary">
                Debes tener al menos uno. Si lo quieres sacar, presionar
                "Delete"
              </Alert>
            ) : null}
            <Button
              variant="dark"
              onClick={() => {
                deleteCart(product.id, user.id);
              }}
            >
              Delete Product
            </Button>
          </div>
        ))}
      <ListGroup>
        <ListGroup.Item>Total del Carrito - ${totalQuantity}</ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default Cart;
