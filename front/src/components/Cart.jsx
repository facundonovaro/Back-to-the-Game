import React from "react";
import { Alert, ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaTrash, FaCartPlus, FaCartArrowDown } from "react-icons/fa";
const Cart = ({ cart, totalQuantity, handleAddCart, handleSubstractCart, handleDeleteCart, user }) => {
  return (
    <div className="cart">
      <h1 id="titleCart">Mi Carrito</h1>
      {cart.length !== 0 ? (
        <div className="cartContainer">
          <div id="productsCartContainer">
            {cart.map((product) => (
              <div>
                <div key={product.id} className="productCart">
                  <div className="listGroupCart">
                    <div>
                      <div>
                        <h4>{product.name}</h4>
                        <div className="subTotalCart">
                          <div className="subTotal">
                            <p>Precio unitario - ${product.price}</p>
                          </div>
                          <div>
                            Sub Total - ${product.quantity * product.price}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="buttonsCart">
                      <Button
                        className="cart-buttons"
                        variant="light"
                        onClick={() => {
                          handleAddCart({
                            quantity: product.quantity + 1,
                            total: (product.quantity + 1) * product.price,
                            orderId: product.orderId,
                            id: product.id
                          })
                        }}
                        disabled={product.quantity >= product.stock}
                      >
                        <FaCartPlus
                          size={30}
                        />
                      </Button>
                      <div>{product.quantity}</div>
                      <Button
                        className="cart-buttons"
                        variant="light"
                        onClick={() => {
                          handleSubstractCart({
                            quantity: product.quantity - 1,
                            total: (product.quantity - 1) * product.price,
                            orderId: product.orderId,
                            id: product.id
                          })
                        }}
                        disabled={product.quantity <= 1}
                      >
                        <FaCartArrowDown
                          size={30}
                        />
                      </Button>
                      <Button
                        className="cart-buttons"
                        variant="ligth"
                        onClick={() => {
                          handleDeleteCart(product.id)
                        }}
                      >
                        <FaTrash
                          size={30}
                        />
                      </Button>
                    </div>
                  </div>
                  <div>
                  </div>
                  {product.quantity >= product.stock ? (
                    <Alert variant="danger">Llegaste al máximo stock</Alert>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
          <div id="totalCardCart">
            <div id="totalCart">Total del Carrito: ${totalQuantity}</div>
            <div>
              <Link to={user.id ? ("/checkout") : ("/users/login")}>
                <Button id="checkoutCart" variant="success">
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
              <Link to="/products" className="boton-verProductos">Ver Productos </Link>
            </Button>
          </div>
        )}
    </div>
  );
};
export default Cart;























