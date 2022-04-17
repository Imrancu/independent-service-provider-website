import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { serviceName, description, price } = service;
    return (
        <div className='col-sm-12 col-md-6 col-lg-4 g-5 bg-light'>
            <div className="card hover-style border-0 shadow-sm p-3 mb-5 bg-body rounded">
                <div className="card-body">
                    <h5 className="card-title">{serviceName}</h5>
                    <p title={description} className="card-text text-dark">{description.slice(0, 200)}...</p>
                    <p className='text-dark'><small>{price}</small></p>
                    <a href="#" className="btn btn-color">Book Now</a>
                </div>
            </div>
        </div>

    );
};

export default Service;