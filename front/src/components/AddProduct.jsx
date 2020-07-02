import React from "react";
import { ListGroupItem, ListGroup, Form, Button } from "react-bootstrap"

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
  categories
}) => {
  return (
    <div className="container-fluid" style={{ width: "60%" }}>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <legend>Agregar Producto</legend>
        </div>
        <div className="form-group">
          <div>
            <label for="exampleFormControlSelect1">Categoria</label>

            <select onChange={handleCategoryChange} class="form-control" id="exampleFormControlSelect1">
              {categories &&
                categories.map((category) => (
                  <option key={category.id}>{category.name}</option>
                ))}

            </select>
          </div>


          <label>Nombre de Producto</label>
          <input
            value={nameInput}
            placeholder={nameInput}
            onChange={handleNameChange}
            type="text"
            className="form-control"
            name="name"
          />
        </div>
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
  );
};

export default AddProduct;
