import React, {useRef, useState} from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../context/Context";
import {Link, useNavigate} from 'react-router-dom';

export default function UpdateProfile() {
let emailRef = useRef(),
    pwdRef = useRef(),
    pwdConfirmRef = useRef();
const { currentUser, updateEmail, updatePassword } = useAuth();
const [error, setError] = useState('');
const [loading, setLoading] = useState(false);
const history = useNavigate();

 function handleSubmit(e) {
   
    e.preventDefault();

    if(pwdRef.current.value !== pwdConfirmRef.current.value) {
        setError("Password do not match.")
        return;
    }

    const promises = [];
    setLoading(true)
    setError('')
    if(emailRef.current.value !== currentUser.email) {
        promises.push(updateEmail(emailRef.current.value))
    }

    if(pwdRef.current.value !== currentUser.password) {
        promises.push(updatePassword(pwdRef.current.value))
    }

    Promise.all(promises).then(()=> {
        history('/')
    }).catch(()=> {

        setError("Failed to create an account.")
    }).finally(()=> {
        setLoading(false)
    })
    
}
  return (
    <div>
        <Card>
            <Card.Body>
                {error && <Alert variant="danger"> {error}</Alert>}
                <h2 className="text-center mb-4">Update Profile</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} defaultValue={currentUser.email} required />
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"  ref={pwdRef} placeholder="Leave blank to leave the same"/>
                    </Form.Group>
                    <Form.Group id="password-confirm">
                        <Form.Label>Password Confirm</Form.Label>
                        <Form.Control type="password"  ref={pwdConfirmRef} placeholder="Leave blank to leave the same"/>
                    </Form.Group>
                    <Button disabled ={loading} type="submit" className="w-100 mt-4">Update</Button>
                </Form>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
            Go back home? <Link to="/">Cancel</Link> 
        </div>
    </div>);
}
