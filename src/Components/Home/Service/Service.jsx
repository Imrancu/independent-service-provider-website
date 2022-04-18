import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, serviceName, description, price, img } = service;
    const navigate = useNavigate();
    const goToCheckout = id => {
        navigate(`/checkout/${id}`);

    }
    return (
        <div className='col-sm-12 col-md-6 col-lg-4 g-5 bg-light'>
            <div class="card-group">
                <div class="card hover-style border-0 shadow-sm p-3 mb-5 bg-body rounded">
                    <img src={img} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title my-4">{serviceName}</h5>
                        <p title={description} class="card-text text-dark">{description.slice(0, 200)}...</p>
                        <p class="card-text my-3"><small class="text-dark">Price: ${price}</small></p>
                        <button onClick={() => goToCheckout(id)} className="btn btn-color">Book Now</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Service;