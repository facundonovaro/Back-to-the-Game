import React from "react";
import { Carousel } from "react-bootstrap";

const SingleProduct = ({ product, handlerSubmitCart, userId }) => {
  return (
    <div className="container-fluid" style={{ width: "80%" }}>
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100" src={product.img1Url} />
              </Carousel.Item>
              {product.img2Url ? (
                <Carousel.Item>
                  <img className="d-block w-100" src={product.img2Url} />
                </Carousel.Item>
              ) : null}
            </Carousel>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.description}</p>
              <p className="card-text">$ {product.price}</p>
              <small className="text-muted">Stock: {product.stock}</small>
              <div><br></br><br></br>
                <button
                  type="button"
                  className="btn btn-dark"
                  onClick={() => {
                    handlerSubmitCart(product.id, userId, product.price);
                  }}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
