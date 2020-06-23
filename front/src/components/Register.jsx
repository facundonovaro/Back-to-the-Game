import React from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'



export default ({ firstName, lastName, username, password, handlerChange, submit }) => {
    return (
        <div>
            <h2>REGISTER</h2>
            <Form onSubmit={submit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label >First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter First Name" name="firstName" onChange={handlerChange} value={firstName} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label >lastName</Form.Label>
                    <Form.Control type="text" placeholder="Enter Last Name" name="lastName" onChange={handlerChange} value={lastName} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label >Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter E-Mail/Username" name="username" onChange={handlerChange} value={username} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label >Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" onChange={handlerChange} value={password} />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
</Button>
            </Form>

        </div>

    )
}