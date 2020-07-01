import React from "react";

const AddProduct = ({
  handleSubmit,
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
}) => {
  return (
    <div className="container-fluid" style={{ width: "60%" }}>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <legend>Add Product</legend>
        </div>
        <div className="form-group">
          <label>Name of Product</label>
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
          <label>Price</label>
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
          <label>Image 1</label>
          <input
            value={image1Input}
            onChange={hangleImage1Change}
            type="text"
            className="form-control"
            name="img1Url"
          />
        </div>
        <div className="form-group">
          <label>Image 2</label>
          <input
            value={image2Input}
            onChange={handleImage2Change}
            type="text"
            className="form-control"
            name="img2Url"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
