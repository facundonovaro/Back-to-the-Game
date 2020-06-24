import React from 'react';
import {Link} from 'react-router-dom'

const Products = ({ products, handlerSubmitCart}) => {
	return(
        <div>
            {products.map(product=>(
                <div key={product.id}>
                    <Link to={`/products/${product.id}`}>
                    <h2>{product.name}</h2>
                    <img src={product.img1Url} width = '500'/>
                    <hr/>
                    <h4>{`Descriptión: ${product.description}`}</h4> 
                    <h4>{`Price: ${product.price}`}</h4>
                    <h4>{`Stock: ${product.stock}`}</h4>
                    </Link>
                <button type="button" className="btn btn-dark" onClick={handlerSubmitCart}>Agregar al carrito</button>
                    <hr/>
                    <br/>  
                </div>
                 
                ))}
            </div>
          ) 
       };

export default Products;
