import React from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'



export default ({ firstName, lastName, username, password, handlerChange, submit,passwordValidate,error,message }) => {
    return (
      <div>
        <h2>REGISTER</h2>
        <Form onSubmit={submit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter First Name"
              name="firstName"
              onChange={handlerChange}
              value={firstName}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>lastName</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Last Name"
              name="lastName"
              onChange={handlerChange}
              value={lastName}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter E-Mail/Username"
              name="username"
              onChange={handlerChange}
              value={username}
            />
            <Form.Text className="text-muted"></Form.Text>
            {error ? (
              <Form.Text className="error" style={{ color: "red" }}>
                {message}
              </Form.Text>
            ) : null}
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onChange={handlerChange}
              value={password}
            />

            {passwordValidate ? (
              <Form.Text className="error" style={{ color: "red" }}>
                La contraseña es insegura. Debe contener:
                <li>1 o más letras mayúsculas</li>
                <li>1 o más letras minísculas</li>
                <li>1 o más números</li>
                <li>Más de 4 carácteres</li>
              </Form.Text>
            ) : null}
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
}