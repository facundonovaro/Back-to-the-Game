import React from "react";
import { Carousel } from "react-bootstrap";

const DeleteProduct = ({
  products,
  handleChooseProduct,
  handleDelete,
  product,
}) => {
  return (
    <div className="container-fluid" style={{ width: "60%" }}>
      <div className="form-group">
        <legend>Borrar Producto</legend>
        <div className="form-group">
          <label htmlFor="product" className="col-xs-2 control-label">
            Product
          </label>
          <div className="col-xs-10">
            <select
              onChange={handleChooseProduct}
              className="form-control"
              name="product"
            >
              {products.map((product) => (
                <option key={product.id} value={product.id}>
                  {product.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      {product.id ? (
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
                <div>
                  <br></br>
                  <br></br>
                  <button
                    onClick={() => {
                      handleDelete(product.id);
                    }}
                    className="btn btn-primary"
                  >
                    Eliminar Producto
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <button className="btn btn-primary">Eliminar Producto</button>
      )}
    </div>
  );
};

export default DeleteProduct;
