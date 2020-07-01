
import React from 'react'
import Button from "react-bootstrap/Button"

import { Link } from 'react-router-dom'


export default ({ userLogoutEvent, username}) => {

    return (

    <div>
        
        <p>Muchas gracias por tu compra!</p>
        <p>Te mandamos la confirmacion de compra a tu mail: {username}</p>
        <Link to='/products'>
            <Button > Seguir comprando </Button>
        </Link>
        <Button onClick={userLogoutEvent}> Cerrar sesión </Button>

    </div>

    )}