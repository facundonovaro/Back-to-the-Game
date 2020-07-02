import React from "react";
import { Form, Button } from "react-bootstrap";

const AddProduct = ({
  handleSubmit,
  handleCategoryChange,
  handleImage2Change,
  hangleImage1Change,
  handleStockChange,
  handlePriceChange,
  handleDescriptionChange,
  handleNameChange,
  nameInput,
  descriptionInput,
  priceInput,
  stockInput,
  image1Input,
  image2Input,
  categories,
  addCat,
  handleNewCat,
  handleSubmitNewCat,
  user,
}) => {
  return (
    <>
      {user.role == "superAdmin" || user.role == "admin" ? (
        <div className="container-fluid" style={{ width: "60%" }}>
          <div className="form-group">
            <legend>Agregar Producto</legend>
          </div>
          <div className="form-group">
            <Form>
              {categories &&
                categories.map((category) => (
                  <div key={category.id} className="mb-3">
                    <Form.Check
                      type="checkbox"
                      id={category.id}
                      label={category.name}
                      onChange={handleCategoryChange}
                      value={category.id}
                    />
                  </div>
                ))}
              <Form.Control
                placeholder="Agregar Categoría"
                onChange={handleNewCat}
                value={addCat}
              />
              <Button onClick={handleSubmitNewCat}>Agregar Categoría</Button>
            </Form>
          </div>
          <form onSubmit={handleSubmit}>
            <label>Nombre de Producto</label>
            <input
              value={nameInput}
              placeholder={nameInput}
              onChange={handleNameChange}
              type="text"
              className="form-control"
              name="name"
            />

            <div className="form-group">
              <label>Description</label>
              <input
                value={descriptionInput}
                onChange={handleDescriptionChange}
                type="text"
                className="form-control"
                name="description"
              />
            </div>
            <div className="form-group">
              <label>Precio</label>
              <input
                value={priceInput}
                onChange={handlePriceChange}
                type="number"
                className="form-control"
                name="price"
              />
            </div>
            <div className="form-group">
              <label>Stock</label>
              <input
                value={stockInput}
                onChange={handleStockChange}
                type="number"
                className="form-control"
                name="stock"
              />
            </div>
            <div className="form-group">
              <label>Imagen 1</label>
              <input
                value={image1Input}
                onChange={hangleImage1Change}
                type="text"
                className="form-control"
                name="img1Url"
              />
            </div>
            <div className="form-group">
              <label>Imagen 2</label>
              <input
                value={image2Input}
                onChange={handleImage2Change}
                type="text"
                className="form-control"
                name="img2Url"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Agregar Producto
            </button>
          </form>
        </div>
      ) : (
        <img
          id="imgNotFound"
          src="https://cdn.optinmonster.com/wp-content/uploads/2018/06/android-404-845x504.png"
        ></img>
      )}
    </>
  );
};

export default AddProduct;
