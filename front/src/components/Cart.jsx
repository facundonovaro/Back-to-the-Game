import React from "react";
import { Alert, ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaTrash, FaCartPlus, FaCartArrowDown } from "react-icons/fa";

const Cart = ({ deleteCart, updateCart, cart, user, totalQuantity }) => {
  return (
    <div>
      <h1>Tu Carrito</h1>
      {cart.length !== 0 ? (
        <div id="cartContainer">
          <div id="productsCartContainer">
            {cart.map((product) => (
              <div key={product.id} id="productCart">
                <div id="listGroupCart">
                  <div>
                    <h3>{product.product.name}</h3>
                    <p>Precio individual - ${product.product.price}</p>
                  </div>

                  <div id="subTotalCart">
                    Sub Total - ${product.quantity * product.product.price}
                  </div>
                  <div id="buttonsCart">
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
                      <FaCartPlus />
                    </Button>
                    <div>{product.quantity}</div>
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
                      <FaCartArrowDown />
                    </Button>

                    <Button
                      variant="dark"
                      onClick={() => {
                        deleteCart(product.id, user.id);
                      }}
                    >
                      <FaTrash />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div id="totalCart">Total del Carrito - ${totalQuantity}</div>
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
