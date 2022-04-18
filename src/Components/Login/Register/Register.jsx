import { Button } from 'bootstrap';
import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const handleSubmit = event => {
        event.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
    }
    const goToLogin = event => {
        navigate('/login')
    }
    return (
        <div className='container'>
            <h2>Please Register</h2>
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
                <p className='text-dark mt-4'>Already have an account? <Link to="/register" onClick={goToLogin} className="text-success text-decoration-none">Please Login</Link></p>
            </Form>
        </div>
    );
};

export default Register;