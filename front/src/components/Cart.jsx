import React from "react";

const Cart = ({ deleteCart, updateCart, cart, user }) => {
  return (
    <div>
      <h1>Tu Carrito</h1>
      {cart &&
        cart.map((product) => (
          <div key={product.id}>
            <h2>{product.product.name}</h2>
            <button
              onClick={() => {
                updateCart({
                  quantity: product.quantity + 1,
                  orderId: product.id,
                  userId: user.id,
                });
              }}
            >
              + 1
            </button>
            <h2>{product.quantity}</h2>
            <button
              onClick={() => {
                updateCart({
                  quantity: product.quantity - 1,
                  orderId: product.id,
                  userId: user.id,
                });
              }}
            >
              - 1
            </button>
            <button
              onClick={() => {
                deleteCart(product.id, user.id);
              }}
            >
              Delete Product
            </button>
          </div>
        ))}
    </div>
  );
};

export default Cart;
