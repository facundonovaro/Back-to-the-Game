import React from "react";
import { Alert, ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaTrash, FaCartPlus, FaCartArrowDown } from "react-icons/fa";

const Cart = ({ cart, totalQuantity, handleAddCart, handleSubstractCart, handleDeleteCart }) => {
  return (
    <div>
      <h1 id="titleCart">Mi Carrito</h1>
      {cart.length !== 0 ? (
        <div id="cartContainer">
          <div id="productsCartContainer">
            {cart.map((product) => (
              <div key={product.id} id="productCart">
                <div id="listGroupCart">
                  <div>
                    <h3>{product.name}</h3>
                    <p>Precio individual - ${product.price}</p>
                  </div>
                  <div id="subTotalCart">
                    Sub Total - ${product.quantity * product.price}
                  </div>
                  <div id="buttonsCart">
                    <Button
                      variant="dark"
                      onClick={() => {   
                        handleAddCart({quantity: product.quantity + 1,
                        total: (product.quantity + 1) * product.price,
                        orderId: product.orderId,
                        id: product.id})
                      }}
                      disabled={product.quantity >= product.stock}
                    >
                      <FaCartPlus />
                    </Button>
                    <div>{product.quantity}</div>
                    {product.quantity >= product.stock ? (
                      <Alert variant="primary">Llegaste al máximo stock</Alert>
                    ) : null}

                    <Button
                      variant="dark"
                      onClick={() => {   
                        handleSubstractCart({quantity: product.quantity - 1,
                         total: (product.quantity - 1) * product.price,
                         orderId: product.orderId,
                         id: product.id})
                       }}
                      disabled={product.quantity <= 1}
                    >
                      <FaCartArrowDown />
                    </Button>

                    <Button
                      variant="dark"
                      onClick={() => {
                        handleDeleteCart(product.id)
                      }}
                    >
                      <FaTrash />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div id="totalCardCart">
            <div id="totalCart">Total del Carrito - ${totalQuantity}</div>
            <div>
              <Link to="/checkout">
                <Button id="checkoutCart" variant="dark">
                  {" "}
                  Finalizar Compra
                </Button>
              </Link>
            </div>
          </div>
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
