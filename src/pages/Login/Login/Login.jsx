import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
<Container>
    <h2>Please Login</h2>
<Form className='w-25 mx-auto'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
      <br></br>
      <Form.Text className="text-success">
        You don't have account ? <Link to='/register'>Register</Link>

      </Form.Text>
      <Form.Text className="text-success">

        </Form.Text>
        <Form.Text className="text-danger">
        
        </Form.Text>
    </Form>

</Container>
  )
}

export default Login