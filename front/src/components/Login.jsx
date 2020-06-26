import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default ({ handleChange, handleSubmit, user, username, password, message, error }) => {
  return (
    <div className='login'>
      <Form className="loginForm" onSubmit={handleSubmit}>
        <Form.Label class="titulo-login">
          Hola! Ingresá tu e-mail y clave
        </Form.Label>
        <Form.Group >
          <Form.Control
            type="email"
            placeholder="E-mail"
            onChange={handleChange}
            value={username}
            name="username"
          />
          <Form.Text style={{ color: "white" }} >
            No vamos a compartir tu e-mail con nadie. Nunca. Quedate tranquilo, en serio.
          </Form.Text>
        </Form.Group>
        <Form.Group >
          <Form.Label></Form.Label>
          <Form.Control
            type="password"
            placeholder="Clave"
            onChange={handleChange}
            value={password}
            name="password"
          />
          {error ? (
            <Form.Text className="error" style={{ color: "red" }}>
              {message}
            </Form.Text>
          ) : null}
        </Form.Group >
        <Button className="buttonSeparator" variant="primary" type="submit" >
          Ingresá
        </Button>

        <Button href="/users/register" className="buttonLoginRegister" variant="primary" type="submit">
          Crea un Usuario
        </Button>

      </Form>
    </div>
  );
};
