import React, { useContext } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { authcontext } from '../../../Providers/AuthProvider'

const Login = () => {
    const {signIn}=useContext(authcontext)
    const navigate=useNavigate();
    const location=useLocation()
    console.log('login location',location)
    const from =location.state?.from?.pathname || '/catagorie/0'
    const handlesubmit=(event)=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password);
        signIn(email,password)
        .then(result=>{
            const loggeduser=result.user;
            console.log(loggeduser)
            navigate(from,{replace:true})
        })
        .catch(error=>{
            console.log(error)
        })
    }
  return (
<Container>
    <h2>Please Login</h2>
<Form onSubmit={handlesubmit} className='w-25 mx-auto'>
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