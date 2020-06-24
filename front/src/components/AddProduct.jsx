import React from "react";

const AddProduct = ({ handleName, handleDescription, handlePrice, handleStock, hangleImage1, handleImage2, handleSubmit }) => {
  return (
    <div className='container-fluid' style={{width: '60%'}}>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            onChange={handleName}
            type="text"
            className="form-control"
            id="name"
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            onChange={handleDescription}
            type="text"
            className="form-control"
            id="description"
          />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input
            onChange={handlePrice}
            type="number"
            className="form-control"
            id="price"
          />
        </div>
        <div className="form-group">
          <label>Stock</label>
          <input
            onChange={handleStock}
            type="number"
            className="form-control"
            id="stock"
          />
        </div>
        <div className="form-group">
          <label>Image 1</label>
          <input
            onChange={hangleImage1}
            type="text"
            className="form-control"
            id="img1Url"
          />
        </div>
        <div className="form-group">
          <label>Image 2</label>
          <input
            onChange={handleImage2}
            type="text"
            className="form-control"
            id="img2Url"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </div>
  )
}

export default AddProduct;