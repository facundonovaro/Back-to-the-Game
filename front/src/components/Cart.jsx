import React from "react";
import { Alert, ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cart = ({ deleteCart, updateCart, cart, user, totalQuantity }) => {
  return (
    <div>
      <h1>Tu Carrito</h1>
      {cart.length !== 0 ? (
        <div>
          {cart.map((product) => (
            <div key={product.id} id="productCart">
              <div id="listGroupCart">
                <div>
                  <h3>{product.product.name}</h3>
                </div>
                <div>
                  <p>Precio individual - ${product.product.price}</p>
                </div>
                <div>
                  <p>Sub Total - ${product.quantity * product.product.price}</p>
                </div>

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
                <div>
                  <p>{product.quantity}</p>
                </div>
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

                <Button
                  variant="dark"
                  onClick={() => {
                    deleteCart(product.id, user.id);
                  }}
                >
                  Delete Product
                </Button>
              </div>
            </div>
          ))}
          <p>Total del Carrito - ${totalQuantity}</p>
        </div>
      ) : (
        <div>
          <p>No hay elementos en el Carrito</p>
          <Button variant="dark">
            <Link to="/products">Ver Productos </Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default Cart;
