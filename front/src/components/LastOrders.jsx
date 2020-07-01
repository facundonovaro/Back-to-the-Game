import React from 'react'
import {Button ,Card} from "react-bootstrap"
import { Link } from 'react-router-dom'


export default ({orders}) => {

    let dates = Object.keys(orders)
    
    return (


        <div>
            <p>Last Orders</p>

            {dates.map(updatedAt=>{
                return (
                    <div>
                    <h2>{updatedAt}</h2>
                   { orders[updatedAt].map(order=>{
                        return(
                        <div key={order.id}>
                            
                            <Card style={{ width: '12rem' }} >
                                <Card.Img variant="top" src= {order.product.img1Url} />
                                <Card.Body>
                                    <Card.Title>{order.product.name}</Card.Title>
                                    <Card.Text>
                                        {order.product.description}
                                    </Card.Text>
                                    <Card.Subtitle>$ {order.product.price}</Card.Subtitle>
                                </Card.Body>
                            </Card>
                        </div>
                        )

                    })}
                    </div>
                )     
            })}


        </div>

    )
}