import React from 'react';
import img from '../../images/sad.png';
import './NotFoundPage.css';

const NotFoundPage = () => {
    return (
        <div>
            <h1 className='my-5'>404</h1>
            <img src={img} alt="" />
            <p className='text-dark fs-3 mt-4'>YOU ARA GOING TO DO SOMETHING WRONG!</p>
        </div>
    );
};

export default NotFoundPage;