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
            // handleChangeEmail,
            // email
             })=>{

    return(
        <div>
            <h2 className="titleCart">Checkout</h2>

            {( cart.length !==0 ? (
                <div className="checkCont">
                    {cart.map(cart => {
                        return (
                            <div key={cart.orderId}className="checkProd">
                            <Card >
                            <Card.Img variant="top" src={cart.img1Url} />
                            <hr/>
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
                    <hr/>
                    <br></br>


      <div className="direCheck">
            <Form onSubmit={handleSubmit}>
                <Form.Label ><h4>Agregá la dirección de entrega</h4></Form.Label>
                <Form.Group >
                    <Form.Label>Dirección</Form.Label>
                        <Form.Control required type="text" placeholder="Dirección*"
                            name="orderAdress" value={orderAdress} onChange={handleChange}
                             />                
                </Form.Group>

                <li>Factura total: $ {total}</li>
                <br></br>
                <Button type='submit'
                 >Confirmar compra</Button>
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

         