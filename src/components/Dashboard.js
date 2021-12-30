import React, {useState} from 'react';
import { Button, Card, Alert} from "react-bootstrap";
import { useAuth } from "../context/Context";
import {Link, useNavigate} from 'react-router-dom';

export default function Dashboard() {
    const [error, setError] = useState('');

    const { currentUser, logout} = useAuth();

    const history = useNavigate();

    async function handleLogOut() {
        setError('');
        try {
            await logout();
            history('/login')
        }
        catch {
            setError('Failed to log out');
        }

    }
    return (
        <>
        <Card>
            <Card.Body>
                {error && <Alert variant="danger"> {error}</Alert>}
                <h2 className="text-center mb-4">Profile</h2>
                <strong>Email: </strong> {currentUser.email}
                <Link to="/update-profile" className='btn btn-primary mt-3 w-100'>Update Profile</Link>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
            <Button variant="link" onClick={handleLogOut}>Log Out</Button>
        </div>
        </>
    )
}
