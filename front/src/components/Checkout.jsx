import React from 'react'
import Button from "react-bootstrap/Button"
import { Card, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import {Mailchimp} from 'react-mailchimp-form'


export default({cart,
            total,
            handleSubmit,
            handleChange,
            orderAdress,
            handleChangeEmail,
            email
            })=>{

    return(
        <div>
            <h2>Checkout</h2>

            {( cart.length !==0 ? (
                <div>
                <div className='displayCheckout textProductsForce'>
                    {cart.map(cart => {
                        return (
                            <div key={cart.orderId} >
                            <Card style={{ width: '12rem' }} >
                            <Card.Img variant="top" src={cart.img1Url} />
                            <Card.Body>
                                <Card.Title>{cart.name}</Card.Title>
                                <Card.Text>
                                        {cart.description}
                                </Card.Text>
                            <Card.Subtitle>$ {cart.price}</Card.Subtitle>
                            </Card.Body>
                        </Card>
                        </div>
                        );
                    })}
                </div>
                <div>
                    <Form onSubmit={handleSubmit}>
                <Form.Label >Agregá la dirección de entrega</Form.Label>
                <Form.Group >
                    <Form.Label>Dirección</Form.Label>
                        <Form.Control required type="text" placeholder="Dirección*"
                            name="orderAdress" value={orderAdress} onChange={handleChange}
                             />
                        <Form.Control required type="text" placeholder="Confirmar Email*" value={email} onChange={handleChangeEmail}
                            name="Email"
                        />
                        
                </Form.Group>

                <li>Factura total: $ {total}</li>
                <Button type='submit' >Confirmar compra</Button>
            </Form>
            </div>
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

         