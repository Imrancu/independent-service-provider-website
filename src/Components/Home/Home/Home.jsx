import React from 'react';
import Footer from '../../Footer/Footer';
import Banner from '../Banner/Banner';
import Navbar from '../Navbar/Navbar';
import Sample from '../Sample/Sample';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='bg-light'>
            <Navbar />
            <Banner />
            <Services />
            <Sample />
            <Footer />
        </div>
    );
};

export default Home;