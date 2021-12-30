import React, {useRef, useState} from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../context/Context";
import {Link, useNavigate} from 'react-router-dom';

export default function Signup() {
let emailRef = useRef(),
    pwdRef = useRef(),
    pwdConfirmRef = useRef();
const { signup } = useAuth();
const [error, setError] = useState('');
const [loading, setLoading] = useState(false);
const history = useNavigate();

async function  handleSubmit(e) {
    e.preventDefault();

    if(pwdRef.current.value !== pwdConfirmRef.current.value) {
        setError("Password do not match.")
        return;
    }
    try {
        setError('');
        setLoading(true)
      await  signup(emailRef.current.value, pwdRef.current.value)
      history("/")
    }
    catch {
        setError("Failed to create an account.")
    }
    setLoading(false)
}
  return (
    <div>
        <Card>
            <Card.Body>
                {error && <Alert variant="danger"> {error}</Alert>}
                <h2 className="text-center mb-4">Sign Up</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required />
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"  ref={pwdRef} required />
                    </Form.Group>
                    <Form.Group id="password-confirm">
                        <Form.Label>Password Confirm</Form.Label>
                        <Form.Control type="password"  ref={pwdConfirmRef} required />
                    </Form.Group>
                    <Button disabled ={loading} type="submit" className="w-100 mt-4">Submit</Button>
                </Form>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
            Already have an account? <Link to="/login">Log In</Link> 
        </div>
    </div>);
}
