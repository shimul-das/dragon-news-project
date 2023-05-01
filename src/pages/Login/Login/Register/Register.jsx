import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Register = () => {
return (
<Container>
    <h2>Please Register</h2>
    <Form className='w-25 mx-auto'>
    <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control name='name' type="text" placeholder="Enter Name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Photo Url</Form.Label>
            <Form.Control name='photourl' type="text" placeholder="Enter Photo Url" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name='email' type="email" placeholder="Enter email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name='password' type="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check name='accept' type="checkbox" label="Accept Terms And Condition" />
        </Form.Group>
        <Button variant="primary" type="submit">
            Login
        </Button>
        <br></br>
        <Form.Text className="text-success">
            Have a Account ?
            <Link to='/login'>Login</Link>

        </Form.Text>
        <Form.Text className="text-success">

        </Form.Text>
        <Form.Text className="text-danger">

        </Form.Text>
    </Form>

</Container>
)
}

export default Register