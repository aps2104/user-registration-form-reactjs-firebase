import React, {useRef, useState} from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../context/Context";
import {Link} from 'react-router-dom';

export default function ForgotPassword() {
let emailRef = useRef();
const { forgotPassword } = useAuth();
const [error, setError] = useState('');
const [message, setMessage] = useState('');
const [loading, setLoading] = useState(false);

async function  handleSubmit(e) {
    e.preventDefault();
    try {
        setMessage('');
        setError('');
        setLoading(true)
      await forgotPassword(emailRef.current.value)
      setMessage('Email sent for password reset.');
    }
    catch {
        setError("Failed to reset password")
    }
    setLoading(false)
}
  return (
    <div>
        <Card>
            <Card.Body>
                {error && <Alert variant="danger"> {error}</Alert>}
                {message && <Alert variant="success"> {message}</Alert>}
                <h2 className="text-center mb-4">Reset Password </h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required />
                    </Form.Group>
                    <Button disabled ={loading} type="submit" className="w-100 mt-4">Reset</Button>
                </Form>
                <div className="w-100 text-center mt-2">
                  <Link to="/login"> Log In </Link>
                </div>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
            New User? <Link to="/signup">Sign Up</Link>
        </div>
    </div>);
}
