import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const handleSubmit = event => {
        event.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
    }
    const goToRegister = event => {
        navigate('/register')
    }
    return (
        <div className='container'>
            <h2>Please Login</h2>
            <Form onClick={handleSubmit} className='w-50 mx-auto bg-white p-5 shadow-sm mb-5 bg-body rounded'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='label-text'>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='label-text'>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                <Button className='btn-color' variant="primary" type="submit">
                    Login
                </Button>
                <p className='text-dark mt-4'>New to Dental Solution? <Link to="register" onClick={goToRegister} className="text-success text-decoration-none">Please Register</Link></p>
            </Form>
        </div>
    );
};

export default Login;