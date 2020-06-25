import React from 'react';
import {Link} from 'react-router-dom'
import {Card, ListGroupItem, ListGroup, Button} from 'react-bootstrap'

const Products = ({ products, handlerSubmitCart}) => {
	return(

     <div className="contProd">
        {products.map(product=>(
     <div key={product.id} className="contProds">
        <Card style={{ width: '18rem' }}>
        <Link to={`/products/${product.id}`}><img src={product.img1Url} className="card-img-top"/></Link>
        <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>
            {`Descriptión: ${product.description}`}
            </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroupItem>{`Price: ${product.price}`}</ListGroupItem>
            <ListGroupItem>{`Stock: ${product.stock}`}</ListGroupItem>
        </ListGroup>
        <Card.Body>
        <Button variant="primary" onClick={handlerSubmitCart}>Add to Cart</Button>{' '}
        </Card.Body>
        </Card>
        </div>
        ))}
     </div>

) 
};


export default Products;







{/* <div>
{products.map(product=>(
<div className="card" width="18rem" key={product.id}>
    <Link to={`/products/${product.id}`}>
    <img src={product.img1Url} className="card-img-top"/>
    </Link>
    <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{`Descriptión: ${product.description}`}</p>
    </div>
    <ul className="list-group list-group-flush">
    <li className="list-group-item">{`Price: ${product.price}`}</li>
    <li className="list-group-item">{`Stock: ${product.stock}`}</li>
    </ul>
    <div className="card-body">
        <button type="button" className="btn btn-dark" onClick={handlerSubmitCart}>Agregar al carrito</button>
    </div>
</div>
))}
</div>
) 
}; */}

{/* <div>
            {products.map(product=>(
                <div key={product.id}>
                    <Link to={`/products/${product.id}`}>
                    <h2>{product.name}</h2>
                    <img src={product.img1Url} width = '500'/>
                    <h4>{`Descriptión: ${product.description}`}</h4> 
                    <h4>{`Price: ${product.price}`}</h4>
                    <h4>{`Stock: ${product.stock}`}</h4>
                    </Link>
                <button type="button" className="btn btn-dark" onClick={handlerSubmitCart}>Agregar al carrito</button> 
                </div>
                 
                ))}
            </div> */}
