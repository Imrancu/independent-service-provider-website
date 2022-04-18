import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { serviceName, description, price, img } = service;
    const navigate = useNavigate();
    const goToCheckout = id => {
        navigate('/checkout');

    }
    return (
        <div className='col-sm-12 col-md-6 col-lg-4 g-5 bg-light'>
            <div className="card-group">
                <div className="card hover-style border-0 shadow-sm p-3 mb-5 bg-body rounded">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title my-4">{serviceName}</h5>
                        <p title={description} className="card-text text-dark">{description.slice(0, 200)}...</p>
                        <p className="card-text my-3"><small className="text-dark">Price: ${price}</small></p>
                        <button onClick={goToCheckout} className="btn btn-color">Book Now</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Service;