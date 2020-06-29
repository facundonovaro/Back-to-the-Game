import React from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'



export default ({ firstName, lastName, username, password, handlerChange, submit,passwordValidate,error,message }) => {
    return (
      <div className="login">
        <Form className="loginForm" onSubmit={submit}>
          <Form.Label className="titulo-login">Completá tus datos</Form.Label>
          <Form.Group>
            <Form.Control
              required
              type="text"
              placeholder="Nombre"
              name="firstName"
              onChange={handlerChange}
              value={firstName}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group>
            <Form.Label></Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Apellido"
              name="lastName"
              onChange={handlerChange}
              value={lastName}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group>
            <Form.Label></Form.Label>
            <Form.Control
              type="email"
              placeholder="E-mail"
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

          <Form.Group>
            <Form.Label></Form.Label>
            <Form.Control
              type="password"
              placeholder="Clave"
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
            Continuar
          </Button>
        </Form>
      </div>
    );
}