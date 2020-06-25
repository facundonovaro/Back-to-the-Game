import React from 'react';
import {Link} from 'react-router-dom'
import {Card, ListGroupItem, ListGroup, Button, Row, Col} from 'react-bootstrap'

const Products = ({ products, handlerSubmitCart}) => {
	return(
       
     <div className="containerProd">
        {products.map(product=>(
     <div key={product.id} className="cards">
        <Card style={{ width: '18rem' }}>
        <Link to={`/products/${product.id}`}><img src={product.img1Url} className="card-img-top" className="imgProd"/></Link>
        <Card.Body>
            <Card.Title className="titleCard">{product.name}</Card.Title>
            <Card.Text className="descrCard">
            {`Descriptión: ${product.description}`}
            </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroupItem>{`Price: ${product.price}`}</ListGroupItem>
            <ListGroupItem>{`Stock: ${product.stock}`}</ListGroupItem>
        </ListGroup>
        <Card.Body>
        <Button
                variant="primary"
                onClick={() => {
                  handlerSubmitCart(product.id, userId, product.price);
                }}
              >
                Add to Cart
              </Button>{" "}
        </Card.Body>
        </Card>
        </div>
      ))}
    </div>
  );
};

export default Products;

