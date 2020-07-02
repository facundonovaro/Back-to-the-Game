
import React from 'react'
import{ Button, Card} from "react-bootstrap"

import { Link } from 'react-router-dom'


export default ({ userLogoutEvent, username, orders}) => {

    
    let dates = Object.keys(orders)
    let lastItem = dates.shift()
  
    return (

    <div>
            {dates.length ? (
            <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Datos de compra</Card.Title>

                    {orders[lastItem].map(order => {

                        return(
                        <div>
                            <Card.Subtitle>{order.product.name}</Card.Subtitle>
                            <Card.Text> {order.product.price} </Card.Text>
                        </div>)
                    })}
                    <Card.Text>{orders[lastItem][0].address}</Card.Text>

                </Card.Body>
            </Card>

                <p>Te mandamos la confirmacion de compra a tu mail: {username}</p>
                <p>Muchas gracias por tu compra!</p>
                <Link to='/products'>
                    <Button > Seguir comprando </Button>
                </Link>
                <Button onClick={userLogoutEvent}> Cerrar sesión </Button>
            </div>
                ): (null) }  
        

    </div>

    )}