import React from 'react';

const Products = ({handlerSubmit, products}) => {
	return(
        <div>
            <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand">Products</a>
            <form className="form-inline" onSubmit={handlerSubmit}>
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            </nav>
        </div>
    ) 
};

export default Products;
