import React from 'react';
import img from '../../../images/implant.jpg';
import './Sample.css';

const Sample = () => {
    return (
        <div className="container">
            <h1 className='border-bottom text-success my-5'>Feature</h1>
            <div className="row d-flex align-items-center justify-content-center">
                <div className="col-md-6 col-sm-12">
                    <div>
                        <h1 className='text-success text-start mb-4'>Implants</h1>
                        <p className='text-start fs-5 text-dark'>Missing teeth can make it hard for you to eat your favorite foods or smile without feeling self-conscious. Implants are the best way to fix missing teeth forever.</p>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 my-5">
                    <img src={img} className="img-fluid shadow-sm p-3 mb-5 bg-body rounded" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Sample;