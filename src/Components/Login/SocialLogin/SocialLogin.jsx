import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import auth from '../../../Firebase/Firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    let errorMessage;

    if (error) {
        errorMessage = <p className='text-danger'>Error: {error.message}</p>
    };
    if (user) {
        navigate('/home')
    }

    return (
        <div>
            <button onClick={() => signInWithGoogle()} className="btn btn-color w-100 mb-4"><FcGoogle /> Sign In With Google</button>
            {errorMessage}
            <div className='d-flex align-items-center mx-5 justify-content-center'>
                <div style={{ height: '1px' }} className='border w-50'></div>
                <p className='text-dark mx-3'>OR</p>
                <div style={{ height: '1px' }} className='border w-50'></div>
            </div>
        </div>
    );
};

export default SocialLogin;