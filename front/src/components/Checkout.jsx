import React from "react";
import Button from "react-bootstrap/Button";
import { Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
// import {Mailchimp} from 'react-mailchimp-form'
export default ({
  cart,
  total,
  handleSubmit,
  handleChange,
  orderAdress,
  handleChangeEmail,
  email,
  user,
}) => {
  return (
    <>
      {user.id ? (
        <div>
          <h2 className="titleCart">Checkout</h2>
          {cart.length !== 0 ? (
            <div>
              <div className="checkCont">
                {cart.map((cart) => {
                  return (
                    <div key={cart.orderId} className="checkProd">
                      <Card >
                        <Card.Img variant="top" src={cart.img1Url} />
                        <Card.Body>
                          <Card.Title>{cart.name}</Card.Title>
                          <Card.Text>{cart.description}</Card.Text>
                          <Card.Subtitle>$ {cart.price}</Card.Subtitle>
                        </Card.Body>
                      </Card>
                    </div>
                  );
                })}
              </div>
              <div>
              <br/>
                <Form onSubmit={handleSubmit} className="direCheck">
                  <Form.Group>
                    <Form.Label>Agregá tu dirección de entrega</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Castillo 1332, CABA, Argentina"
                      name="orderAdress"
                      value={orderAdress}
                      onChange={handleChange}
                    />
                    {/*  <Form.Control required type="text" placeholder="Confirmar Email*" value={email} onChange={handleChangeEmail}
                            name="Email"
                        /> */}
                  </Form.Group>
                  <li>Factura total: $ {total}</li>
                  <br></br>
                  <Button type="submit">Confirmar compra</Button>
                </Form>
              </div>
            </div>
          ) : (
            <div>
              <p> No tenes ordenes nuevas </p>
              <Link to="/products">
                <Button> Seguir comprando </Button>
              </Link>
            </div>
          )}
        </div>
      ) : (
        <img
          id="imgNotFound"
          src="https://cdn.optinmonster.com/wp-content/uploads/2018/06/android-404-845x504.png"
        ></img>
      )}
    </>
  );
};