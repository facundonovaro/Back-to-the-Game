import React from "react";

const SingleProduct = ({ product, handlerSubmitCart, userId }) => {
  return (
    <div>
      {product.name}
      {product.description}
      {product.price}
      {product.stock}
      {product.img1Url}
      {product.img2Url ? product.img2Url : null}
      <button
        type="button"
        className="btn btn-dark"
        onClick={() => {
          handlerSubmitCart(product.id, userId, product.price);
        }}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default SingleProduct;
