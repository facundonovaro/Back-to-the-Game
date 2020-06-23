import React from 'react';
import {Link} from 'react-router-dom'

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
        
        <div>
            {products.map(product=>(
                <div key={product.id}>
                     <Link to={`/api/products/${product.id}`}>
                    <h2>{product.name}</h2>
                    <img src={product.img1Url} width = '500'/></Link>
                    <hr/>
                    <h4>{`Descriptión: ${product.description}`}</h4> 
                    <h4>{`Price: ${product.stock}`}</h4>
                    <hr/>
                    <br/>  
                </div>
                 
                ))}
            </div>
        </div>
    ) 
};

export default Products;
