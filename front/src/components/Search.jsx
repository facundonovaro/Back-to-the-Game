import React from 'react';
import {Link} from 'react-router-dom'
import {Card, ListGroupItem, ListGroup, Button} from 'react-bootstrap'

const Search = ({productsSearched , handlerSubmitCart}) => {
	return(
       
     <div className="containerProd">
        {productsSearched.map(productSearched=>(
     <div key={productSearched.id} className="cards">
        <Card style={{ width: '18rem' }}>
        <Link to={`/products/${productSearched.id}`}><img src={productSearched.img1Url} className="card-img-top" className="imgProd"/></Link>
        <Card.Body>
            <Card.Title className="titleCard">{productSearched.name}</Card.Title>
            <Card.Text className="descrCard">
            {`Descriptión: ${productSearched.description}`}
            </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroupItem>{`Price: ${productSearched.price}`}</ListGroupItem>
            <ListGroupItem>{`Stock: ${productSearched.stock}`}</ListGroupItem>
        </ListGroup>
        <Card.Body>
        {/* <Button variant="primary" onClick={handlerSubmitCart}>Agregar al carrito</Button>{' '} */}
        </Card.Body>
        </Card>
        </div>
        ))}
     </div>

 ) 
};

export default Search;