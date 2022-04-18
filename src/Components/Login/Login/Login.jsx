import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../Firebase/Firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';


const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(
        auth
    );
    const from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (user) {
        navigate(from, { replace: true });
    }

    const handleSubmit = event => {
        event.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }
    const goToRegister = event => {
        navigate('/checkout')
    }
    return (
        <div className='container'>
            <div className='w-50 mx-auto bg-white p-5 shadow-sm my-5 bg-body rounded'>
                <h2>Please Login</h2>
                <SocialLogin />
                <Form onClick={handleSubmit} className=''>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='label-text'>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='label-text'>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>
                    <Button className='btn-color' variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
                <p className='text-dark mt-4'>New to Dental Solution? <Link to="/register" onClick={goToRegister} className="text-success text-decoration-none">Please Register</Link></p>
                {/* <p className='text-dark mt-4'>Forgot Password? <button onClick={resetPassword} className="text-success btn btn-link text-decoration-none">Reset Your Password</button></p>
                <ToastContainer /> */}
            </div>

        </div>
    );
};

export default Login;