import React, { useContext, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { authcontext } from '../../../../Providers/AuthProvider'

const Register = () => {
    const {createuser}=useContext(authcontext);
    const [accepted,setaccepted]=useState(false)
    const handleRegsiter=event=>{
    event.preventDefault();
    const form=event.target;
    const name=form.name.value;
    const photo = form.photo.value;
    const email=form.email.value;
    const password=form.password.value;
    console.log(email,name,password);
    createuser(email,password)
    .then(result=>{
        const loggeduser=result.user
        console.log(loggeduser);
    })
    .then(error=>{
        console.log(error);
    })
   }
   const handleaccepted=(event)=>{
    console.log(event.target.checked)
    setaccepted(event.target.checked)

   }
return (
<Container>
    <h2>Please Register</h2>
    <Form onSubmit={handleRegsiter} className='w-25 mx-auto'>
    <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control name='name' type="text" placeholder="Enter Name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Photo Url</Form.Label>
            <Form.Control name='photo' type="text" placeholder="Enter Photo Url" required />
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
            <Form.Check onClick={handleaccepted} name='accept' type="checkbox" label={<>Accept <Link to="/terms">Terms And Condition</Link></>} />
        </Form.Group>
        <Button disabled={!accepted}  variant="primary" type="submit">
            Register
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