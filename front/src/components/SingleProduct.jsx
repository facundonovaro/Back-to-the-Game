import React from 'react'; 

const SingleProduct = ({ product }) => {
    return (
        <div>
            {product.name}
            {product.description}
            {product.price}
            {product.stock}
            {product.img1Url}
            {product.img2Url ? product.img2Url : null}
        </div>
    )
}

export default SingleProduct