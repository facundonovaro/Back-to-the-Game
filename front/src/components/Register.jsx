import React from "react"
import Button from 'react-bootstrap/Button';
import {Form, ProgressBar} from 'react-bootstrap'
import { Link } from 'react-router-dom';
/* import { FaFacebook } from "react-icons/fa"; */

export default ({ firstName, lastName, username, password, handlerChange, submit, passwordValidate, error, message,   passwordBarNow, passwordBarVariant, passwordSecurity, passwordSecurityClass, }) => {
    return (
      <div className="login">
        <Form className="loginForm" onSubmit={submit}>
          <Form.Label className="titulo-login">Completá tus datos</Form.Label>
          <Form.Text style={{ color: "white" }}>*campos requeridos</Form.Text>
          <Form.Group>
            <Form.Control
            required
              type="text"
              placeholder="Nombre*"
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
              placeholder="Apellido*"
              name="lastName"
              onChange={handlerChange}
              value={lastName}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group>
            <Form.Label></Form.Label>
            <Form.Control
            required
              type="email"
              placeholder="E-mail*"
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
            <Form.Text className={passwordSecurityClass}>{passwordSecurity}</Form.Text>
            <ProgressBar now={passwordBarNow} variant={passwordBarVariant} />
            <Form.Text className='messagePasswordLogin' >
              <p> Aumentá la seguridad de tu clave agregando: mayúsculas, minúsculas, números y algún carácter especial (!,@,#,\,$,%)</p>
            </Form.Text>

            {passwordValidate ? (
              <Form.Text  style={{ color: "red" }}>
                La contraseña debe tener un mínimo de 4 carácteres
              </Form.Text>
            ) : null} 
          </Form.Group>
          <Button variant="primary" type="submit">
            Continuar
          </Button>
          {/* <br></br>
          <Link to="/facebook">
            <Button><FaFacebook/> Continuar con Facebook</Button>
          </Link> */}
        </Form>
      </div>
    )}