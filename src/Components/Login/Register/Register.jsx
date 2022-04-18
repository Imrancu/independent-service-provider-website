import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase/Firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleRegister = event => {
        event.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        createUserWithEmailAndPassword(email, password)
    }

    const goToLogin = () => {
        navigate('/login')
    }
    if (user) {
        navigate('/login')
    }
    return (
        <div className='container'>
            <div className='w-50 mx-auto bg-white p-5 shadow-sm my-5 bg-body rounded'>
                <h2>Register Please</h2>
                <SocialLogin />
                <Form onSubmit={handleRegister} className=''>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='label-text'>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='label-text'>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>
                    <Button className='btn-color' variant="primary" type="submit">
                        Register
                    </Button>
                </Form>
                <p className='text-dark mt-4'>Already have an account? <Link to="/login" onClick={goToLogin} className="text-success text-decoration-none">Please Login</Link></p>
            </div>

        </div>
    );
};

export default Register;