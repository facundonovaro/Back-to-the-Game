import React from 'react'
import Button from "react-bootstrap/Button"
import { Card, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default({cart,
            total,
            handleSubmit,
            handleChange,
            orderAdress
            })=>{

    return(
        <div>
            <h2>Checkout</h2>

            {( cart.length !==0 ? (
                <div>
                    {cart.map(order => {
                        return (
                            <div key={order.product.id}>
                            <Card style={{ width: '12rem' }} >
                            <Card.Img variant="top" src={order.product.img1Url} />
                            <Card.Body>
                                <Card.Title>{order.product.name}</Card.Title>
                                <Card.Text>
                                        {order.product.description}
                                </Card.Text>
                            <Card.Subtitle>$ {order.product.price}</Card.Subtitle>
                            </Card.Body>
                        </Card>
                        </div>
                        );
                    })}
                    <Form onSubmit={handleSubmit}>
                <Form.Label >Agregá la dirección de entrega</Form.Label>
                <Form.Group >
                    <Form.Label>Dirección</Form.Label>
                        <Form.Control required type="text" placeholder="Dirección*"
                            name="orderAdress" value={orderAdress} onChange={handleChange} />
                </Form.Group>

            <li>Factura total: $ {total}</li>
            <Button type='submit' >Confirmar compra</Button>
            </Form>
            
                </div>
            ) 
            
            
            : <div>
            
            <p> No tenes ordenes nuevas  </p>

            <Link to='/products'>
            <Button > Seguir comprando </Button>
            </Link>
            
            </div>
            )
        }
        </div>
        
    )
}

         