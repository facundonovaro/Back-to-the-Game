import React from 'react'; 

const EditProduct = ({ name, description, price, stock, img1Url, img2Url, handleName, handleDescription, handlePrice, handleStock, hangleImage1, handleImage2, handleSubmit }) => {
    return (
      <div className='container-fluid' style={{width: '60%'}}>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              value={name}
              onChange={handleName}
              type="text"
              className="form-control"
              id="name"
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              value={description}
              onChange={handleDescription}
              type="text"
              className="form-control"
              id="description"
            />
          </div>
          <div className="form-group">
            <label>Price</label>
            <input
              value={price}
              onChange={handlePrice}
              type="number"
              className="form-control"
              id="price"
            />
          </div>
          <div className="form-group">
            <label>Stock</label>
            <input
              value={stock}
              onChange={handleStock}
              type="number"
              className="form-control"
              id="stock"
            />
          </div>
          <div className="form-group">
            <label>Image 1</label>
            <input
              value={img1Url}
              onChange={hangleImage1}
              type="text"
              className="form-control"
              id="img1Url"
            />
          </div>
          <div className="form-group">
            <label>Image 2</label>
            <input
              value={img2Url}
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

export default EditProduct;