import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='container'>
            <h1 className='mt-5 text-success border-bottom'>Services</h1>
            <div className="row">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    />)
                }
            </div>

        </div>
    );
};

export default Services;