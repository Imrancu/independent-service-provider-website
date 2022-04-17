import React from 'react';
import img from '../../../images/implant.jpg';
import './Sample.css';

const Sample = () => {
    return (
        <div className='container mb-5'>
            <h1 className='text-success border-bottom mb-5'>Dentist Work</h1>
            <div className="row content">
                <div className="text">
                    <div>
                        <h1 className='text-success text-start mb-4'>Implants</h1>
                        <p className='text-start fs-5 text-dark'>Missing teeth can make it hard for you to eat your favorite foods or smile without feeling self-conscious. Implants are the best way to fix missing teeth forever.</p>
                    </div>
                </div>
                <div className="image">
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Sample;