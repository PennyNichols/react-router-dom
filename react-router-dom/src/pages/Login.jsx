import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate} from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()
  return (
    <>
    
      <Form className="mt-5 bg-light p-4 shadow">
        <h1 className='text-dark text-center mb-3'> Login </h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>

      <p className="mt-5 text-center">
        Don't have an account <Button variant="warning" onClick={ () => navigate('/sign-up', { state: {page: 'login'} })}> Sign-up</Button>
      </p>
    </>
  )
}

export default Login