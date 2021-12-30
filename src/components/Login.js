import React, {useRef, useState} from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../context/Context";
import {Link, useNavigate} from 'react-router-dom';

export default function Login() {
let emailRef = useRef(),
    pwdRef = useRef();
const { login } = useAuth();
const [error, setError] = useState('');
const [loading, setLoading] = useState(false);
const history = useNavigate();

async function  handleSubmit(e) {
    e.preventDefault();
    try {
        setError('');
        setLoading(true)
      await login(emailRef.current.value, pwdRef.current.value)
      history("/")
    }
    catch {
        setError("Failed to log in. Check email or password")
    }
    setLoading(false)
}
  return (
    <div>
        <Card>
            <Card.Body>
                {error && <Alert variant="danger"> {error}</Alert>}
                <h2 className="text-center mb-4">Log In</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required />
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"  ref={pwdRef} required />
                    </Form.Group>
                    <Button disabled ={loading} type="submit" className="w-100 mt-4">Log In</Button>
                </Form>
                <div className="w-100 text-center mt-2">
                  <Link to="/forgot-password"> Forgot Password? </Link>
                </div>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
            New User? <Link to="/signup">Sign Up</Link>
        </div>
    </div>);
}
