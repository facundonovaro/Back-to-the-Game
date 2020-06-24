import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom"


export default ({ handleChange, handleSubmit, user, username, password }) => {
  return (
    <div>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Aca va tu email"
            onChange={handleChange}
            value={username}
            name="username"
          />
          <Form.Text className="text-muted">
            No vamos a compartir tu email con nadie.Nunca.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Contraseña"
            onChange={handleChange}
            value={password}
            name="password"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>

        <Link to={`/users/2`}>
          <Button variant="primary" type="submit">
            Perfil
        </Button>
        </Link>

      </Form>
    </div>
  );
};
