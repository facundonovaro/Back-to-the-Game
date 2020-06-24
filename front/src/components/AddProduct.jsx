import React from "react";

const AddProduct = () => {
  return (
    <div>
      <form>
        <div class="form-group">
          <label>Name</label>
          <input
            type="text"
            class="form-control"
            id="name"
          />
        </div>
        <div class="form-group">
          <label>Description</label>
          <input
            type="text"
            class="form-control"
            id="description"
          />
        </div>
        <div class="form-group">
          <label>Price</label>
          <input
            type="number"
            class="form-control"
            id="price"
          />
        </div>
        <div class="form-group">
          <label>Stock</label>
          <input
            type="number"
            class="form-control"
            id="stock"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
