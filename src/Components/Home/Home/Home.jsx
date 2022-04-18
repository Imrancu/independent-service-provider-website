import React from 'react';
import Banner from '../Banner/Banner';
import Sample from '../Sample/Sample';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='bg-light' id='id'>
            <Banner />
            <Services />
            <Sample />
        </div>
    );
};

export default Home;